import React from 'react';


export default class ContactForm extends React.Component {
    render() {
        return (
            <div className="section dark bg-color-3 tkSection-padding" data-stellar-background-ratio="0.5">
                <div className="section_wrapper clearfix tkSection-paddingTop-only">
                    <div className="items_group clearfix">

                        <div className="column one-sixth column_placeholder">
                            <div className="placeholder">
                                &nbsp;
                            </div>
                        </div>

                        <div className="column two-third column_column ">
                            <div className="column_attr align_center">
                                <h3 className="tkFont1">Lets Get Together</h3>
                                <hr className="no_line hrmargin_b_30"/>
                                <p className="big">
                                    Nunc eu dapibus purus. Morbi quis laoreet orci. Nunc mollis non enim vel mollis.
                                    Nunc porta tincidunt lectus, eu lobortis odio imperdiet luctus aenean suscipit.
                                </p>
                                <hr className="no_line hrmargin_b_30"/>
                                <div role="form" className="wpcf7" id="tk-contact-form" lang="en-US" dir="ltr">
                                    <div id="contactWrapper">
                                        <form id="contactform">

                                            <div className="column one-second">
                                                <input placeholder="Your name" type="text" name="name" id="name"
                                                       size="40" aria-required="true" aria-invalid="false"/>
                                            </div>

                                            <div className="column one-second">
                                                <input placeholder="Your e-mail" type="email" name="email" id="email"
                                                       size="40" aria-required="true" aria-invalid="false"/>
                                            </div>
                                            <div className="column one">
                                                <input placeholder="Subject" type="text" name="subject" id="subject"
                                                       size="40" aria-invalid="false"/>
                                            </div>
                                            <div className="column one">
                                                <textarea placeholder="Message" name="body" id="body"
                                                          style={{width: 100 + "%"}} rows="10"
                                                          aria-invalid="false"></textarea>
                                            </div>
                                            <div className="column one">
                                                <input type="button" value="Send A Message" id="submit"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
