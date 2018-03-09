import React, {Component} from "react";

const CustomButton = ({
                          newPageURL,
                          buttonCaption,
                          className,
                          isButton,
                          ...props
                      }) => {
    return (
        isButton ?
            <form noValidate action={newPageURL}>
                <button
                    className={`button ${className}`}
                    {...props}
                >
                    {buttonCaption}
                </button>
            </form> :
            <a href={newPageURL}
               className={`button ${className}`}
               {...props}
            >
                {buttonCaption}
            </a>
    );
};

export default CustomButton;