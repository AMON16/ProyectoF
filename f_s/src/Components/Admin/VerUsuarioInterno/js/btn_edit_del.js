import React from "react";
import { useNavigate } from "react-router-dom";


function Button_delete () {
    const style = {
        margin: '0.5em',
        listStyle: 'none'
      };
    let navigate = useNavigate();
    return (
        <div>
            <button style = {style}
                className="btn btn-success"
                onClick={() => {
                    //deleteAccounts(account.cc);
                    navigate("/Admin-user-int");
                }   }   >
                Edit
            </button>

            <button style = {style}
            className="btn btn-danger"
            onClick={() => {
                //deleteAccounts(account.cc);
                navigate("/Admin-user-int");
            }   }   >
                Delete
            </button>
        </div>
    )
}

export default Button_delete;