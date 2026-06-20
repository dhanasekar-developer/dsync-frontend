import { capitalize } from "./capitalize";
import { errorToast } from "./toast";

export const errorToastHandler = (
    error?: any,
    message?: string
) => {

    let msg = "Something went wrong. Please try again!";

    if (message) {
        msg = message;
    }

    else if (error?.data?.field && error?.data?.message) {
        msg = `${error.data.field} - ${error.data.message}`;
    }

    else if (error?.data?.message) {
        msg = error.data.message;
    }

    else if (error?.data?.detail || error?.data?.details) {
        msg = error.data.detail || error?.data?.details;
    }

    else if (error?.details || error?.detail) {
        msg = error?.details || error?.detail;
    }

    else if (error?.error === "FETCH_ERROR") {
        msg = "Unable to connect to the server.";
    }

    else if (error?.status === 401) {
        msg = "Authentication failed.";
    }

    else if (error?.status === 403) {
        msg = "You don't have permission to perform this action.";
    }

    else if (error?.status === 404) {
        msg = "Resource not found.";
    }

    else if (error?.status === 500) {
        msg = "Internal server error.";
    }



    errorToast(capitalize(msg));
};