/**
 * Created by yasser on 2/6/2018.
 */
import React, {Component} from "react";
import * as storyAction from "../../Actions/story/action";
import * as profileAction from "../../Actions/profile/action";
import ElementProvider from "../../Admin/Form/ElementProvider";
import {connect} from "react-redux";
// import { withFormik, Form, Field, FieldArray } from 'formik';
import Yup from 'yup';
import classnames from 'classnames';


// import { Form, Text } from 'react-form';
import { Form, Text, Radio, RadioGroup, Select, Checkbox } from 'react-form';

const statusOptions = [
    {
        label: 'Single',
        value: 'single'
    },
    {
        label: 'In a Relationship',
        value: 'relationship'
    },
    {
        label: "It's Complicated",
        value: 'complicated'
    }
];
const errorValidator = (values) => {
    return {
        hello: !values.hello ||
        !values.hello.match( /Hello World/ ) ? "Input must contain 'Hello World'" : null
    };
};

const warningValidator = (values) => {
    return {
        hello: !values.hello ||
        !values.hello.match( /^Hello World$/ ) ? "Input should equal 'Hello World'" : null
    };
};

const successValidator = (values) => {
    return {
        hello: values.hello &&
        values.hello.match( /Hello World/ ) ? "Thanks for entering 'Hello World'!" : null
    };
};



const imageList = [];
const api = {
    baseUrl: 'https://api.soundcloud.com',
    client_id: 'caf73ef1e709f839664ab82bef40fa96'
};

let filterData = {
    CategoryID: 12,
    CategoryTypeID: 2,
    ProfileID: 1011,
    Page: 1,
    Size: 30,
    Languages: ["en"],
    isMicroApp: false,
    MicroAppProfileID: null,
};

const yell = (PassedComponent) =>
    ({children, ...props}) =>
        <PassedComponent {...props}>
            {children.toUpperCase()}!
        </PassedComponent>


const Title = (props) => <h1>{props.children}</h1>
const Title5 = (props) => <h5>{props.children}</h5>

const InputEmail = (props) => <input type="email" {...props.name}/>
const InputPassword = (props) => <input type="password" {...props.name}/>
const DropDown = (props) =>
    <select {...props.name}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
    </select>


const AngryTitle = yell(Title);
const HappyTitle = yell(Title5);

const Email = ElementProvider(InputEmail);
const Password = ElementProvider(InputPassword);
const FruitDropDown = ElementProvider(DropDown);

// const formikEnhancer = withFormik({
//     validationSchema: Yup.object().shape({
//         firstName: Yup.string()
//             .min(2, "C'mon, your name is longer than that")
//             .required('First name is required.'),
//         lastName: Yup.string()
//             .min(2, "C'mon, your name is longer than that")
//             .required('Last name is required.'),
//         email: Yup.string()
//             .email('Invalid email address')
//             .required('Email is required!'),
//     }),
//
//     mapPropsToValues: ({ user }) => ({
//         ...user,
//     }),
//     handleSubmit: (payload, { setSubmitting }) => {
//         console.log(payload,'formikEnhancer');
//         setSubmitting(false);
//     },
//     displayName: 'MyForm',
// });
//
// const InputFeedback = ({ error }) =>
//     error ? (
//         <div className="input-feedback">{error}</div>
//     ) : null;
//
// const Label = ({
//                    error,
//                    className,
//                    children,
//                    ...props
//                }) => {
//     return (
//         <label className="label" {...props}>
//             {children}
//         </label>
//     );
// };
//
// const TextInput = ({
//                        type,
//                        id,
//                        label,
//                        error,
//                        value,
//                        onChange,
//                        className,
//                        ...props
//                    }) => {
//     const classes = classnames(
//         'input-group',
//         {
//             'animated shake error': !!error,
//         },
//         className
//     );
//     return (
//         <div className={classes}>
//             <Label htmlFor={id} error={error}>
//                 {label}
//             </Label>
//             <input
//                 id={id}
//                 className="text-input"
//                 type={type}
//                 value={value}
//                 onChange={onChange}
//                 {...props}
//             />
//             <InputFeedback error={error} />
//         </div>
//     );
// };
// const MyForm = props => {
//     const {
//         values,
//         touched,
//         errors,
//         dirty,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         handleReset,
//         isSubmitting,
//     } = props;
//     return (
//         <form onSubmit={handleSubmit}>
//             <TextInput
//                 id="firstName"
//                 type="text"
//                 label="First Name"
//                 placeholder="John"
//                 error={touched.firstName && errors.firstName}
//                 value={values.firstName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//             />
//             <TextInput
//                 id="lastName"
//                 type="text"
//                 label="Last Name"
//                 placeholder="Doe"
//                 error={touched.lastName && errors.lastName}
//                 value={values.lastName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//             />
//             <TextInput
//                 id="email"
//                 type="email"
//                 label="Email"
//                 placeholder="Enter your email"
//                 error={touched.email && errors.email}
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//             />
//
//             <FieldArray
//                 name="contents"
//                 render={arrayHelpers => (
//                         values.contents && values.contents.length > 0 ? (
//                             values.contents.map((friend, index) => (
//                                 <div>
//                                     <TextInput
//                                         id={`contents.${index}`}
//                                         type="text"
//                                         label="title"
//                                         placeholder="Enter your email"
//                                         value={friend.title}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                     {/*<Field name={`contents.${index}`} />*/}
//                                     <button
//                                         type="button"
//                                         onClick={() => arrayHelpers.remove(index)}
//                                     >-</button>
//                                     <button
//                                         type="button"
//                                         onClick={() => arrayHelpers.push({title: '', url: ''})}
//                                     >+</button>
//                                 </div>
//                             ))
//                         ) : (
//                             <button
//                                 type="button"
//                                 onClick={() => arrayHelpers.push('')}
//                             >
//                                 {/** show this when user has removed all friends from the list */}
//                                 Add a friend
//                             </button>
//                         )
//                 )}
//             />
//
//             {/*{values.contents.map(item=> {*/}
//                 {/*return */}
//             {/*})}*/}
//             <button
//                 type="button"
//                 className="outline"
//                 onClick={handleReset}
//                 disabled={!dirty || isSubmitting}
//             >
//                 Reset
//             </button>
//             <button type="submit" disabled={isSubmitting}>
//                 Submit
//             </button>
//         </form>
//     );
// };
//
// const MyEnhancedForm = formikEnhancer(MyForm);




class StoryManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
        };
    }

    componentDidMount() {
        this.loadItemRedux(1011);
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

    componentWillReceiveProps(nextProps){
        console.log(nextProps,'componentWillReceiveProps');
    }

    loadItemRedux = (storyID) => {
        console.log('story loadItemRedux', storyID);
    }

    changeProfile = (event) => {
        console.log('changeProfile');
        if(this.props.filterData.MicroAppProfileID === 1011){
            this.props.getProfileAccountSetting(1010);
        } else {
            this.props.getProfileAccountSetting(1011);
        }
        event.preventDefault();
    }

    submit = (data) => {
        console.log(data);
        this.setState( { data } );

    }

    render() {
        console.log('render rrrrrrr ;)', this.props.stories)
        const loader = <div className="loader">Loading ...</div>;

        return (
            <div>

                <Form onSubmit={submittedValues => this.submit( { submittedValues } )}>
                    { formApi => (
                        <form onSubmit={formApi.submitForm} id="form2">
                            <label htmlFor="firstName">First name</label>
                            <Text field="firstName" id="firstName" />
                            <label htmlFor="lastName">Last name</label>
                            <Text field="lastName" id="lastName" />
                            <RadioGroup field="gender">
                                { group => (
                                    <div>
                                        <label htmlFor="male" className="mr-2">Male</label>
                                        <Radio group={group} value="1" id="1" className="mr-3 d-inline-block" />
                                        <label htmlFor="female" className="mr-2">Female</label>
                                        <Radio group={group} value="0" id="0" className="d-inline-block" />
                                    </div>
                                )}
                            </RadioGroup>
                            <label htmlFor="bio">Bio</label>
                            {/*<TextArea field="bio" id="bio" />*/}
                            <label htmlFor="authorize" className="mr-2">Authorize</label>
                            <Checkbox field="authorize" id="authorize" className="d-inline-block" />
                            <label htmlFor="status" className="d-block">Relationship status</label>
                            <Select field="status" id="status"  options={statusOptions} />
                            <button type="submit" className="mb-4 btn btn-primary">Submit</button>
                        </form>
                    )}
                </Form>

                {/*<MyEnhancedForm*/}
                    {/*user={{ email: 'yaser2us@gmail.com', firstName: 'Yasser', lastName: 'dfgfgfdgfd g dgdgfg df', contents: [{title:'hi', url:'url hi'},{title:'wowowowow', url:'url hi'},{title:'hi', url:'url hi'}] }}*/}
                {/*/>*/}

                {/*<AngryTitle>*/}
                    {/*Salam Yasser*/}
                {/*</AngryTitle>*/}

                {/*<HappyTitle>*/}
                    {/*Nima Jan Salam ;)*/}
                {/*</HappyTitle>*/}

                {/*<Email ref="nimaEmail" name="nimaEmail"/>*/}
                {/*<Password name="nimaPassword"/>*/}
                {/*<FruitDropDown/>*/}
                {/*<button onClick={this.changeProfile}>Change Profile to something ;)</button>*/}

            </div>
        );
    }
}
;

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
export default connect(mapStateToProps, mapDispatchToProps)(StoryManage);