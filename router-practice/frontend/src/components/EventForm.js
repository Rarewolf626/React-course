import { Form } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
    function cancelHandler() {
        // navigate("..");
    }

    // defaultValue 用來設定 props input 的預設值
    return (
        <Form method="post" className={classes.form}>
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    defaultValue={event ? event.title : ""}
                    required
                />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="url"
                    name="image"
                    defaultValue={event ? event.image : ""}
                    required
                />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    defaultValue={event ? event.date : ""}
                    required
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    defaultValue={event ? event.description : ""}
                    required
                />
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button>Save</button>
            </div>
        </Form>
    );
}

export default EventForm;
