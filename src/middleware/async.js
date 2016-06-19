/**
 * Created by marco on 19.6.2016.
 */

export default function({ dispatch }) {
    return next => action => {
        // check if no payload or not promise then property does not exist
        if(!action.payload || !action.payload.then) {
            return next(action);
        }

        // make sure the action's promise resolves
        // next run payload is not promise anymore
        action.payload
            .then(function(response) {
                // create a new action with the old type, but replace the promise with the response data
                const newAction = { ...action, payload: response };
                dispatch(newAction);
            });


    }

}