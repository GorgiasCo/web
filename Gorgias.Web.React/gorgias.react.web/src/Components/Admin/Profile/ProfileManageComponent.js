/**
 * Created by odenza on 12/02/2018.
 */
import React, {Component} from "react";
import * as storyAction from "../../Actions/story/action";
import * as profileAction from "../../Actions/profile/action";
import {connect} from "react-redux";
import {withFormik, Formik, Form, Field, FieldArray} from "formik";
import Yup from "yup";
import classnames from "classnames";
import Select from "react-select";
import "react-select/dist/react-select.css";
import axios from "axios";
import Dropzone from "react-dropzone";

const DropDown = (props) =>
    <select {...props.name}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
    </select>

const options = [
    {value: 'Food', label: 'Food'},
    {value: 'Being Fabulous', label: 'Being Fabulous'},
    {value: 'Ken Wheeler', label: 'Ken Wheeler'},
    {value: 'ReasonML', label: 'ReasonML'},
    {value: 'Unicorns', label: 'Unicorns'},
    {value: 'Kittens', label: 'Kittens'},
];

const optionsProfileTypes = [
    {value: 1, label: 'Food'},
    {value: 2, label: 'Being Fabulous'},
    {value: 3, label: 'Ken Wheeler'},
    {value: 4, label: 'ReasonML'},
    {value: 5, label: 'Unicorns'},
    {value: 6, label: 'Kittens'},
];

class MySelectAsync extends React.Component {
    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (value !== null) {
            console.log(value[this.props.valueKey], 'handleChange MySelect');
            this.props.onChange(this.props.valueName, value[this.props.valueKey]);
        }
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur(this.props.valueName, true);
    };

    getContributors = (input, callback) => {
        const url = "https://gorgiasapp-v4.azurewebsites.net/api/Mobile/V2/Countries/" + input;
        axios({
            method: 'get',
            url: url,
        })
            .then(response => {
                const responseBody = response;
                console.log(responseBody, input, 'in action story success ;) NIMA');

                var data = {
                    options: response.data.Result,
                    complete: 6,
                };

                callback(null, data);
            })
            .catch(error => {
                console.log(error, input, 'in action story error ;)');
                // dispatch(authenticationAction.logout());
            });
    }

    render() {
        return (
            <div style={{margin: '1rem 0'}}>
                <label htmlFor="color">
                    Topics (select at least 3){' '}
                </label>
                <Select.Async
                    id="color"
                    options={optionsProfileTypes}
                    multi={false}
                    loadOptions={this.getContributors}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                    valueKey={this.props.valueKey}
                    labelKey={this.props.labelKey}
                    matchProp={this.props.matchProp}
                    disabled={this.props.disabled}
                />
                {!!this.props.error &&
                this.props.touched && (
                    <div style={{color: 'red', marginTop: '.5rem'}}>
                        {this.props.error}
                    </div>
                )}
            </div>
        );
    }
}

class MySelect extends React.Component {
    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (value !== null) {
            console.log(value[this.props.valueKey], 'handleChange MySelect');
            this.props.onChange(this.props.valueName, value[this.props.valueKey]);
        }
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur(this.props.valueName, true);
    };

    render() {
        return (
            <div style={{margin: '1rem 0'}}>
                <label htmlFor="color">
                    {this.props.label}
                </label>
                <Select
                    id="color"
                    options={optionsProfileTypes}
                    multi={false}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                    valueKey={this.props.valueKey}
                    labelKey={this.props.labelKey}
                    matchProp={this.props.matchProp}
                    disabled={this.props.disabled}
                />
                {!!this.props.error &&
                this.props.touched && (
                    <div style={{color: 'red', marginTop: '.5rem'}}>
                        {this.props.error}
                    </div>
                )}
            </div>
        );
    }
}

class MyTextBox extends React.Component {
    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (value !== null) {
            console.log(value, 'handleChange MySelect');
            //this.props.onChange('wow', value);
        }
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        //this.props.onBlur(this.props.valueName, true);
    };

    render() {
        return (
            <div style={{margin: '1rem 0'}}>
                <label htmlFor="color">
                    {this.props.label}
                </label>
                <input
                    id="color"
                    onChange={this.props.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                    disabled={this.props.disabled}
                />
                {!!this.props.error &&
                this.props.touched && (
                    <div style={{color: 'red', marginTop: '.5rem'}}>
                        {this.props.error}
                    </div>
                )}
            </div>
        );
    }
}

class MyDropZone extends React.Component {
    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (value !== null) {
            console.log(value, 'handleChange MySelect');
            this.props.onChange(this.props.valueName, value[0].preview);
        }
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur(this.props.valueName, true);
    };

    render() {
        return (
            <div style={{margin: '1rem 0'}}>
                <label htmlFor="color">
                    {this.props.label}
                </label>
                <Dropzone
                    multiple={true}
                    onDrop={this.handleChange}>
                    <p>Try dropping some files here, or click to
                        select files to upload.</p>
                </Dropzone>

                {/*<Select*/}
                    {/*id="color"*/}
                    {/*options={optionsProfileTypes}*/}
                    {/*multi={false}*/}
                    {/*onChange={this.handleChange}*/}
                    {/*onBlur={this.handleBlur}*/}
                    {/*value={this.props.value}*/}
                    {/*valueKey={this.props.valueKey}*/}
                    {/*labelKey={this.props.labelKey}*/}
                    {/*matchProp={this.props.matchProp}*/}
                    {/*disabled={this.props.disabled}*/}
                {/*/>*/}
                {!!this.props.error &&
                this.props.touched && (
                    <div style={{color: 'red', marginTop: '.5rem'}}>
                        {this.props.error}
                    </div>
                )}
            </div>
        );
    }
}


const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        ProfileFullname: Yup.string()
            .min(2, "C'mon, your name is longer than that")
            .required('First name is required.'),
        ProfileFullnameEnglish: Yup.string()
            .min(2, "C'mon, your name is longer than that")
            .required('Last name is required.'),
        ProfileEmail: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
        ProfileDescription: Yup.string()
            .min(70, "C'mon, your name is longer than that"),
        ProfileShortDescription: Yup.string()
            .min(70, "C'mon, your name is longer than that"),
        SubscriptionTypeID: Yup.number()
            .required('Subscription is required'),
        ProfilePhoto: Yup.string()
            .required('where is the photo'),
    }),

    mapPropsToValues: ({user}) => ({
        ...user,
    }),
    handleSubmit: (payload, {setSubmitting}) => {
        console.log(payload, 'formikEnhancer');
        setSubmitting(false);
    },
    displayName: 'MyForm',
});

const InputFeedback = ({error}) =>
    error ? (
        <div className="input-feedback">{error}</div>
    ) : null;

const Label = ({
                   error,
                   className,
                   children,
                   ...props
               }) => {
    return (
        <label className="label" {...props}>
            {children}
        </label>
    );
};

const TextInput = ({
                       type,
                       id,
                       label,
                       error,
                       value,
                       onChange,
                       className,
                       ...props
                   }) => {
    const classes = classnames(
        'input-group',
        {
            'animated shake error': !!error,
        },
        className
    );
    return (
        <div className={classes}>
            <Label htmlFor={id} error={error}>
                {label}
            </Label>
            <input
                id={id}
                className="text-input"
                type={type}
                value={value}
                onChange={onChange}
                {...props}
            />
            <InputFeedback error={error}/>
        </div>
    );
};

const TextArea = ({
                      type,
                      id,
                      label,
                      error,
                      value,
                      onChange,
                      className,
                      ...props
                  }) => {
    const classes = classnames(
        'input-group',
        {
            'animated shake error': !!error,
        },
        className
    );
    return (
        <div className={classes}>
            <Label htmlFor={id} error={error}>
                {label}
            </Label>
            <textarea
                rows="5"
                id={id}
                className="text-input"
                type={type}
                value={value}
                onChange={onChange}
                {...props}
            />
            <InputFeedback error={error}/>
        </div>
    );
};



const MyForm = props => {
    const {
        values,
        touched,
        dirty,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setFieldValue,
        setFieldTouched,
        isSubmitting,
        onDrop
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                id="ProfileFullname"
                type="text"
                label="Fullname"
                placeholder="John"
                error={touched.ProfileFullname && errors.ProfileFullname}
                value={values.ProfileFullname}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextInput
                id="ProfileFullnameEnglish"
                type="text"
                label="English Fullname"
                placeholder="Doe"
                error={touched.ProfileFullnameEnglish && errors.ProfileFullnameEnglish}
                value={values.ProfileFullnameEnglish}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextArea
                id="ProfileDescription"
                type="text"
                label="Description"
                placeholder="long bio"
                error={touched.ProfileDescription && errors.ProfileDescription}
                value={values.ProfileDescription}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextInput
                id="ProfileShortDescription"
                type="text"
                label="Short Description"
                placeholder="Bio"
                error={touched.ProfileShortDescription && errors.ProfileShortDescription}
                value={values.ProfileShortDescription}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextInput
                id="ProfileURL"
                type="text"
                label="Short Description"
                placeholder="Bio"
                // error={touched.ProfileURL && errors.ProfileURL}
                value={values.ProfileURL}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextInput
                id="ProfileEmail"
                type="email"
                label="Email"
                placeholder="Enter your email"
                // error={touched.ProfileEmail && errors.ProfileEmail}
                value={values.ProfileEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled
            />
            <MySelect
                valueName="SubscriptionTypeID"
                value={values.SubscriptionTypeID}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.SubscriptionTypeID}
                touched={touched.SubscriptionTypeID}
                disabled={false}
                matchProp="value"
                valueKey="value"
                labelKey="label"
                label="Subscription"
            />
            <MySelect
                valueName="ThemeID"
                value={values.ThemeID}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.ThemeID}
                touched={touched.ThemeID}
                disabled={false}
                matchProp="value"
                valueKey="value"
                labelKey="label"
                label="Theme"
            />
            <MySelectAsync
                valueName="ProfileTypeID"
                value={values.ProfileTypeID}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.ProfileTypeID}
                touched={touched.ProfileTypeID}
                disabled={false}
                matchProp="KeyID"
                valueKey="KeyID"
                labelKey="KeyName"
            />
            <MyDropZone
                error={errors.ProfilePhoto}
                touched={touched.ProfilePhoto}
                valueName="ProfilePhoto"
                onChange={setFieldValue}
                onBlur={setFieldTouched}
            >
            </MyDropZone>
            {/*<FriendList/>*/}
            <FieldArray
                name="friends"
                render={arrayHelpers => (
                    values.friends && values.friends.length > 0 ? (
                        values.friends.map((friend, index) => (
                            <div key={index}>
                                {/*<Field name={`friends.${index}.name`} />*/}
                                {/*<Field name={`friends.${index}.description`} />*/}
                                <TextInput
                                    id={`friends.${index}.name`}
                                    type="text"
                                    label="Friend name"
                                    placeholder="Bio"
                                    // error={touched.ProfileShortDescription && errors.ProfileShortDescription}
                                    value={`friends.${index}.name`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {/*<button*/}
                                {/*type="button"*/}
                                {/*onClick={() => unshift(index)}*/}
                                {/*>*/}
                                {/*-*/}
                                {/*</button>*/}
                                {/*<button*/}
                                {/*type="button"*/}
                                {/*onClick={() => insert(index, {name: ''})}*/}
                                {/*>*/}
                                {/*+*/}
                                {/*</button>*/}
                            </div>
                        ))
                    ) : (
                        <button
                            type="button"
                            // onClick={() => push('')}
                        >
                            {/** show this when user has removed all friends from the list */}
                            Add a friend
                        </button>
                    )
                )}
            />

            <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
            >
                Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
};

const MyEnhancedForm = formikEnhancer(MyForm);

class ProfileManageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
        };
    }

    onDrop(files) {

        console.log('onDrop ;)', files);
        // var image = new Image();
        //
        // image.addEventListener('load', function () {
        //     console.log(image.height, image.width, image.size);
        //     if (image.width > 300) {
        //         console.log('This image must be exactly 2500 pixels wide.');
        //         this.setState({
        //             // files: [...files, files],
        //             files: [...this.state.files, ...files],
        //         });
        //     } else if (image.height !== 3000) {
        //         console.log('This image must be exactly 3000 pixels wide.');
        //     }
        //
        //     // display errors or do success thing
        //     // if (errors.length >= 0) {
        //     //     alert(errors.join(', '));
        //     // } else {
        //     //     alert('client side validations passed');
        //     // }
        // }.bind(this));
        //
        // files.forEach(file => {
        //     const reader = new FileReader();
        //     reader.onload = () => {
        //         const fileAsBinaryString = reader.result;
        //         console.log(file, 'file ;)');
        //
        //
        //         image.src = file.preview;
        //         this.props.addTodo(file.preview);
        //
        //         // do whatever you want with the file content
        //     };
        //     reader.onabort = () => console.log('file reading was aborted');
        //     reader.onerror = () => console.log('file reading has failed');
        //
        //     reader.readAsBinaryString(file);
        // });
    }

    componentDidMount() {
        // this.loadItems(1);
        //this.props.getStoriesOLD(1);
        //this.loadItemsRedux(1011);
        //console.log(this.state.filterData,'filterData',  this.props.profileAccountSetting);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if(this.props !== nextProps){
    //         return true;
    //     }
    //     return false;
    // }
    //
    // componentWillUpdate(nextProps, nextState){
    //     if(this.state.filterData !== undefined){
    //         if(this.state.filterData.MicroAppProfileID !== nextProps.profileAccountSetting.payload.ProfileID){
    //             console.log('updated componentWillUpdate ! ;) ');
    //             //this.loadItemsRedux(1011);
    //         }
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps,'componentWillReceiveProps');
        // if(this.props.filterData !== undefined){
        //     if(this.props.filterData.MicroAppProfileID !== nextProps.profileAccountSetting.payload.ProfileID){
        //         console.log('updated ! ;) ', nextProps.profileAccountSetting.payload.ProfileID, this.props.filterData.MicroAppProfileID, this.props.filterData);
        //         this.loadItemsRedux(123);
        //         // if(this.props.profileAccountSetting.isLoading){
        //         //
        //         // }
        //     }
        // }
    }

    changeProfile = (event) => {
        console.log('changeProfile');
        if (this.props.filterData.MicroAppProfileID === 1011) {
            this.props.getProfileAccountSetting(1010);
        } else {
            this.props.getProfileAccountSetting(1011);
        }
        event.preventDefault();
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;

        return (
            <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop: 150 + "px"}}>
                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                                <div className="column_attr clearfix">
                                    <MyEnhancedForm
                                        // onDrop={this.onDrop.bind(this)}
                                        user={{
                                            ProfileEmail: 'yaser2us@gmail.com',
                                            ProfileFullname: 'Yasser',
                                            ProfileFullnameEnglish: 'Yasser EN',
                                            ProfileDescription: '',
                                            ProfileShortDescription: '',
                                            ProfileURL: 'siti',
                                            ProfileTypeID: 5,
                                            SubscriptionTypeID: undefined,
                                            ThemeID: undefined,
                                            ProfilePhoto: "",
                                            friends: [{name:'yasser',description: 'https://www.facebook.com/ashkan.rastghamatian'},{name:'Nasser', description:'wowow'},{name:'niloofar', description:'lol ;)'}]
                                            // topics:{value: "Kittens", label: "Being Fabulous"},
                                            // topics:{value: "Kittens"},
                                        }}
                                    />
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
;

// let values = { friends: ['jared', 'ian', 'brent'] };

export const MyDynamicForm = ({
                                  move, swap, push, insert, unshift, pop, form,values
                              }) => (
    <Form>
        {values.friends && values.friends.length > 0 ? (
            values.friends.map((friend, index) => (
                <div key={index}>
                    <Field name={`friends.${index}.name`} />
                    {/*<TextInput*/}
                        {/*id="ProfileShortDescription"*/}
                        {/*type="text"*/}
                        {/*label="Short Description"*/}
                        {/*placeholder="Bio"*/}
                        {/*// error={touched.ProfileShortDescription && errors.ProfileShortDescription}*/}
                        {/*value={`friends.${index}.name`}*/}
                        {/*// onChange={handleChange}*/}
                        {/*// onBlur={handleBlur}*/}
                    {/*/>*/}
                    <button
                        type="button"
                        onClick={() => unshift(index)}
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={() => insert(index, {name: ''})}
                    >
                        +
                    </button>
                </div>
            ))
        ) : (
            <button
                type="button"
                onClick={() => push('')}
            >
                {/** show this when user has removed all friends from the list */}
                Add a friend
            </button>
        )}
        {/*<div>*/}
            {/*<button type="submit">Submit</button>*/}
        {/*</div>*/}
    </Form>
);

export const FriendList = () => (
    <div>
        <h1>Friend List</h1>
        <Formik
            initialValues={{ friends: [{name:'yasser'},{name:'Nasser'},{name:'niloofar'}] }}
            onSubmit={values =>
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500)
            }
            render={formikProps => (
                <FieldArray
                    name="friends"
                    component={MyDynamicForm}
                />


            )}
        />
    </div>
);

const mapStateToProps = (state, ownProps) => {
    console.log(state, 'mapStateToProps storylist');
    return {
        stories: state.storyManager.stories.payload,
        filterData: state.storyManager.stories.filterData,
        storiesHasMore: state.storyManager.stories.hasMore,
        profileAccountSetting: state.profile.profileAccountSetting,
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    // console.log(dispatch, 'new', dispatch);
    return {
        // You can now say this.props.createBook
        getStories: filteringData => dispatch(storyAction.getStories(filteringData)),
        getStoriesOLD: page => dispatch(storyAction.getStoriesOLD(page)),
        getCategories: profileID => dispatch(storyAction.getCategories(profileID)),
        getProfileAccountSetting: profileID => dispatch(profileAction.getProfileAccountSetting(profileID))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ProfileManageComponent);