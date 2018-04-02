import React, {Component} from "react";
import Button from 'material-ui/Button';

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
                <Button
                    variant="raised"
                    color="primary"
                    {...props}
                >
                    {buttonCaption}
                </Button>
                {/*<button*/}
                    {/*className={`button ${className}`}*/}
                    {/*{...props}*/}
                {/*>*/}
                {/*</button>*/}
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