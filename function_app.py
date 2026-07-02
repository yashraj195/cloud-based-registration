import os
import json
import uuid
from datetime import datetime

import azure.functions as func
from azure.cosmos import CosmosClient

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)


@app.route(route="MembershipRegister", methods=["GET", "POST"])
def MembershipRegister(req: func.HttpRequest) -> func.HttpResponse:

    if req.method == "GET":
        return func.HttpResponse(
        "Membership API is running.",
        status_code=200
    )

    try:
        # Cosmos DB Configuration
        COSMOS_ENDPOINT = os.environ["COSMOS_ENDPOINT"]
        COSMOS_KEY = os.environ["COSMOS_KEY"]
        DATABASE_NAME = os.environ["COSMOS_DATABASE"]
        CONTAINER_NAME = os.environ["COSMOS_CONTAINER"]

        # Create Cosmos Client
        client = CosmosClient(
            COSMOS_ENDPOINT,
            credential=COSMOS_KEY
        )

        database = client.get_database_client(DATABASE_NAME)
        container = database.get_container_client(CONTAINER_NAME)

        # Read JSON request
        data = req.get_json()

        # Required Fields
        required_fields = [
            "name",
            "registration",
            "email",
            "phone",
            "department",
            "year"
        ]

        missing_fields = [
            field
            for field in required_fields
            if not data.get(field)
        ]

        if missing_fields:
            return func.HttpResponse(
                json.dumps({
                    "success": False,
                    "message": f"Missing required fields: {', '.join(missing_fields)}"
                }),
                status_code=400,
                mimetype="application/json"
            )

        # Document to store
        item = {
            "id": str(uuid.uuid4()),
            "name": data["name"],
            "registration": data["registration"],
            "email": data["email"],
            "phone": data["phone"],
            "department": data["department"],
            "year": data["year"],
            "skills": data.get("skills", ""),
            "reason": data.get("reason", ""),
            "createdAt": datetime.utcnow().isoformat()
        }

        # Insert into Cosmos DB
        container.create_item(item)

        return func.HttpResponse(
            json.dumps({
                "success": True,
                "message": "Membership registration submitted successfully."
            }),
            status_code=200,
            mimetype="application/json"
        )

    except ValueError:
        return func.HttpResponse(
            json.dumps({
                "success": False,
                "message": "Invalid JSON payload."
            }),
            status_code=400,
            mimetype="application/json"
        )

    except Exception as e:
        return func.HttpResponse(
            json.dumps({
                "success": False,
                "message": str(e)
            }),
            status_code=500,
            mimetype="application/json"
        )