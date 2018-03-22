/**
 * Created by yasser on 1/12/2018.
 */
import axios from "axios";

const BASE_URL_V2 = 'https://gorgiasapp-v4.azurewebsites.net/api/';
// const BASE_URL_V2 = 'http://localhost:43587/api/';
let languageCode = 'en';
class HttpRequest {

    instance = null;

    languageCodeFeeling = null;

    constructor() {

        const token = localStorage.getItem("token");
        let headers = null;
        if (token) {
            headers = {'Authorization': `Bearer ${token}`};
        }

        this.instance = {
            headers: {
                'Accept-Language': 'en',
                ...headers
            }
        };

        // let languageLocal = DeviceInfo.getDeviceLocale();
        // let languages = languageLocal.split('-');
        // if (languages.length > 2) {
        //     languageCode = languages[0] + "-" + languages[1];
        // } else {
        //     languageCode = languages[0];
        // }

        this.languageCodeFeeling = languageCode;

        // console.log('languageLocal language ;)', languageLocal, languages);

        this.getHTTP = this.getHTTP.bind(this);
        this.postHTTP = this.postHTTP.bind(this);
        this.getCategories = this.getCategories.bind(this);
    }

    BASE_SERVER_URL_V2 = 'https://gorgiasapp-v4.azurewebsites.net/';
    // BASE_SERVER_URL_V2 = 'http://localhost:43587/';

    Image_Store_URL_V2 = 'https://gorgiasasia.blob.core.windows.net/albums/';

    MicroApp_ProfileFullname_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/MicroApp/';
    MicroApp_Subscribe_Status_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/MicroApp/Subscribe/Status/';
    Profile_Bookmark_Endpoint = BASE_URL_V2 + 'Mobile/V2/Subscriber/Bookmark/';
    Reading_Languages_By_Profile_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/Reader/Languages/';
    Reading_Languages_Update_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/Update/Reader/Languages/';
    Profile_Management_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/Management/';
    Profile_Account_Setting_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/Account/Setting/';
    Profile_Setting_HotSpot = BASE_URL_V2 + 'Mobile/V2/Profile/Setting/';
    Profile_Subscribes_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/Subscribes/';
    Forget_Password_Request_Endpoint = BASE_URL_V2 + 'Account/Forget/';

    Category_Endpoint = BASE_URL_V2 + 'Mobile/V2/Categories/Main/';
    Category_By_ParentID_Endpoint = BASE_URL_V2 + 'Mobile/V2/Categories/';
    Category_By_Search_Endpoint = BASE_URL_V2 + 'Mobile/V2/Categories/Search/';
    Contents_Likes_Update_Endpoint = BASE_URL_V2 + 'Mobile/V2/Contents/Likes/';
    Story_Settings_Endpoint = BASE_URL_V2 + 'Mobile/V2/Story/Settings/';
    Albums_Filter_Endpoint = BASE_URL_V2 + 'Mobile/V2/Albums/Filter';
    Industries_Endpoint = BASE_URL_V2 + 'Mobile/v2/Industries';
    Industries_By_Keyword_Endpoint = BASE_URL_V2 + 'Mobile/v2/Industries/';
    Login_Attempt_Endpoint = BASE_URL_V2 + 'Mobile/V2/Login/Attempt';
    Register_Profile_Token_Endpoint = BASE_URL_V2 + 'Mobile/V2/Register/Profile/Token';
    Profile_Update_Fullname_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/Update';
    Album_Availabilities_Endpoint = BASE_URL_V2 + 'Mobile/V2/Album/Availability/';
    Register_Auto_New_User_Endpoint = BASE_URL_V2 + 'Mobile//V2/Profile/NewUser';
    New_Comment_Endpoint = BASE_URL_V2 + 'Mobile/V2/Comment';
    Comments_Endpoint = BASE_URL_V2 + 'Mobile/V2/Comments/Content/';
    Profile_Subscribe_Endpoint = BASE_URL_V2 + 'Mobile/V2/Subscriber/';
    Profile_Subscribe_In_App_Endpoint = BASE_URL_V2 + 'Mobile/V2/Subscriber/InApp/';
    Mini_Profile_Detail_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/Mini/';
    Album_Detail_Endpoint = BASE_URL_V2 + 'Mobile/V2/Album/';
    Content_Types_Endpoint = BASE_URL_V2 + 'Mobile/V2/Content/Types/';
    Quotes_Endpoint = BASE_URL_V2 + 'Mobile/V2/Quotes';
    Languages_Endpoint = BASE_URL_V2 + 'Mobile/V2/Languages';
    Content_Ratings_Endpoint = BASE_URL_V2 + 'Mobile/V2/Content/Ratings';
    Activity_Types_Endpoint = BASE_URL_V2 + 'Mobile/V2/Felts/';
    Countries_Endpoint = BASE_URL_V2 + 'Mobile/V2/Countries/';//Mobile/V2/Countries/
    Cities_Endpoint = BASE_URL_V2 + 'Mobile/V2/Cities/';
    Profile_Types_Endpoint = BASE_URL_V2 + 'Mobile/V2/ProfileTypes';
    Album_Availability_Endpoint = BASE_URL_V2 + 'Mobile/V2/Album/Availibity/';
    Publish_Album_Update_Endpoint = BASE_URL_V2 + 'Mobile/V2/Album/Publish/Upcoming/';
    Repost_Album_Update_Endpoint = BASE_URL_V2 + 'Mobile/V2/Album/Repost/';
    Repost_Request_Album_Update_Endpoint = BASE_URL_V2 + 'Mobile/V2/Album/Request/Repost/';
    Album_Story_Detail_Endpoint = BASE_URL_V2 + 'Mobile/V2/Album/Story/';
    Update_Profile_Reading_List_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/Readings';
    Update_Profile_Activity_Endpoint = BASE_URL_V2 + 'Mobile/V2/Profile/Activity';
    Upload_New_Album = BASE_URL_V2 + 'Mobile/V2/Album/New';
    Upload_New_Album_With_Category = BASE_URL_V2 + "Mobile/V2/Album/New/Topic"
    //Update_Profile_Registration_Endpoint= BASE_URL_V2 + 'Mobile/V2/Profile/Register/Full';
    Update_Profile_Registration_Endpoint = BASE_URL_V2 + 'Account/Register/Mobile/V2';

    AddressTypes_Endpoints = BASE_URL_V2 + 'AddressTypes/';
    Address_By_ID_Endpoints = BASE_URL_V2 + 'Address/AddressID/';
    Address_New_Endpoint = BASE_URL_V2 + 'Address/';
    Address_Update_Endpoint = BASE_URL_V2 + 'Address/AddressID/';
    Address_Delete_Endpoint = BASE_URL_V2 + 'Address/AddressID/';
    Addresses_By_ProfileID_AddressTypeID_Endpoint = `${BASE_URL_V2}Web/V2/Address/`;

    ContentManager_Insert_Endpoint = `${BASE_URL_V2}UserProfile/`;
    ContentManager_Delete_Endpoint = `${BASE_URL_V2}UserProfile/ProfileID/UserRoleID/UserID/`; //UserProfile/ProfileID/UserRoleID/UserID/{ProfileID}/{UserRoleID}/{UserID}
    ContentManager_Profile_AutoComplete_Endpoint = `${BASE_URL_V2}Profiles/Autocomplete/`;
    ContentManager_Profiles_All_Subscribers_Endpoint = `${BASE_URL_V2}Mobile/V2/Profile/Content/Management/`;
    Profile_Followers_Endpoint = `${BASE_URL_V2}Web/V2/Connection/`;
    Profile_Reports_Endpoint = `${BASE_URL_V2}Reports/Profiles/Current/`;

    Album_Story_Edit_Endpoint = `${BASE_URL_V2}Mobile/V2/Album/Story/Edit/`;
    Album_Story_Latest_Mini_Profile_Endpoint = `${BASE_URL_V2}Mobile/V2/Albums/Filter/Profile/`;
    Album_Story_Create_Update_Endpoint = `${BASE_URL_V2}Mobile/V2/Album/Story/Manage/`;
    Album_Story_Notification_Endpoint = `${BASE_URL_V2}Web/Notification/V2/`;


    //Account/Register/Mobile/V2

    // {
    //     "AlbumName":"hello WOW from fiddler1 Hi5 yasser nasser niloofar asheghetoonam",
    //     "AlbumStatus":true,
    //     "AlbumCover":"https://gorgiasasia.blob.core.windows.net/images/content-20161106233839-pic(4).jpg",
    //     "CategoryID":1,
    //     "ProfileID":1,
    //     "AlbumView":0,
    //     "AlbumDatePublish":"2017-09-09T16:04:20.407",
    //     "AlbumAvailability":1,
    //     "AlbumHasComment":true,
    //     "AlbumReadingLanguageCode":"en",
    //     "AlbumRepostValue":null,
    //     "AlbumRepostRequest":null,
    //     "AlbumRepostAttempt":null,
    //     "AlbumPrice":null,
    //     "AlbumIsTokenAvailable":null,
    //     "AlbumPriceToken":null,
    //     "ContentRatingID":1,
    //     "Contents":[
    //     {
    //         "ContentTitle":"hello WOW from fiddler4 h6",
    //         "ContentURL":"https://gorgiasasia.blob.core.windows.net/images/content-20161106233839-pic(4).jpg",
    //         "ContentGeoLocation":null,
    //         "ContentDimension":"800-600",
    //         "ContentTypeID":1
    //     },
    //     {
    //         "ContentID":0,
    //         "ContentTitle":"hello WOW from fiddler h3",
    //         "ContentURL":"https://gorgiasasia.blob.core.windows.net/images/content-20161106233839-pic(4).jpg",
    //         "ContentGeoLocation":null,
    //         "ContentDimension":"800-600",
    //         "ContentTypeID":1
    //     }
    // ]
    // }


    getAddressTypes(cbSuccess, cbError) {
        this.getHTTP(this.AddressTypes_Endpoints, cbSuccess, cbError);
    }

    async deleteAsyncContentManager(ProfileID, UserRoleID, UserID) {
        return await this.deleteAsyncHTTP(this.ContentManager_Delete_Endpoint + ProfileID + '/' + UserRoleID + '/' + UserID);
    }

    async deleteAsyncContact(AddressID) {
        return await this.deleteAsyncHTTP(this.Address_Delete_Endpoint + AddressID);
    }

    async getAsyncContentManagerAutoComplete(keyword) {
        return await this.getAsyncHTTP(this.ContentManager_Profile_AutoComplete_Endpoint + keyword);
    }

    async getAsyncProfileFollowers(ProfileID, RequestTypeID, PageSize, PageNumber) {
        return await this.getAsyncHTTP(this.Profile_Followers_Endpoint + ProfileID + '/' + RequestTypeID + '/' + PageSize + '/' + PageNumber);
    }

    async getAsyncStoryForEdit(AlbumID, ProfileID) {
        return await this.getAsyncHTTP(this.Album_Story_Edit_Endpoint + AlbumID + '/' + ProfileID + '/600');
    }

    async getAsyncProfileReports(UserID, PageNumber) {
        return await this.getAsyncHTTP(this.Profile_Reports_Endpoint + UserID + '/' + PageNumber);
    }

    async getAsyncContentManagerAllSubscribers(ProfileID) {
        return await this.getAsyncHTTP(this.ContentManager_Profiles_All_Subscribers_Endpoint + ProfileID);
    }

    async getAsyncMiniProfileStories(ProfileID) {
        return await this.getAsyncHTTP(this.Album_Story_Latest_Mini_Profile_Endpoint + ProfileID);
    }

    async newAsyncContentManager(data) {
        return await this.postAsyncHTTPV2(this.ContentManager_Insert_Endpoint, data);
    }

    async postAsyncStoryNotification(data) {
        return await this.postAsyncHTTPV2(this.Album_Story_Notification_Endpoint, data);
    }

    async getAsyncAddressTypes() {
        return await this.getAsyncHTTP(this.AddressTypes_Endpoints);
    }

    async getAsyncAddresses(ProfileID, AddressTypeID) {
        return await this.getAsyncHTTP(this.Addresses_By_ProfileID_AddressTypeID_Endpoint + '/' + ProfileID + '/' + AddressTypeID);
    }

    async newAsyncAddress(data) {
        return await this.postAsyncHTTPV2(this.Address_New_Endpoint, data);
    }

    async newAsyncStory(TypeName, data) {
        return await this.postAsyncHTTPV2(this.Album_Story_Create_Update_Endpoint + TypeName, data);
    }

    async updateAsyncAddress(AddressID, data) {
        return await this.postAsyncHTTPV2(this.Address_Update_Endpoint + AddressID, data);
    }

    getAddressByID(AddressID, cbSuccess, cbError) {
        this.getHTTP(this.Address_By_ID_Endpoints + AddressID, cbSuccess, cbError);
    }

    postNewAlbum(data, cbSuccess, cbError) {
        this.postHTTP(this.Upload_New_Album, cbSuccess, cbError, data);
    }

    postNewAlbumWithCategory(data, cbSuccess, cbError) {
        this.postHTTP(this.Upload_New_Album_With_Category, cbSuccess, cbError, data);
    }

    //Contents_Likes_Update_Endpoint
    postContentsLikesUpdate(data, ProfileID, AlbumID, cbSuccess, cbError) {
        this.postHTTP(this.Contents_Likes_Update_Endpoint + ProfileID + '/' + AlbumID, cbSuccess, cbError, data);
    }

    //Ask Yasser ;)
    postUpdateProfileActivity(data, cbSuccess, cbError) {
        this.postHTTP(this.Update_Profile_Activity_Endpoint, cbSuccess, cbError, data);
    }

    async postAsyncUpdateProfileRegistration(data) {
        return this.postAsyncHTTPV2(this.Update_Profile_Registration_Endpoint, data);
    }

    //Reading_Languages_Update_Endpoint
    postUpdateReadingLanguages(ProfileID, data, cbSuccess, cbError) {
        this.postHTTP(this.Reading_Languages_Update_Endpoint + ProfileID, cbSuccess, cbError, data);
    }

    //int ProfileID
    //string[] ProfileReadings
    postUpdateProfileReadingList(data, cbSuccess, cbError) {
        this.postHTTP(this.Update_Profile_Reading_List_Endpoint, cbSuccess, cbError, data);
    }

    getAlbumStoryDetail(AlbumID, cbSuccess, cbError) {
        this.getHTTP(this.Album_Story_Detail_Endpoint + '/' + AlbumID, cbSuccess, cbError);
    }

    updateRepostAlbum(AlbumID, cbSuccess, cbError) {
        this.getHTTP(this.Repost_Album_Update_Endpoint + '/' + AlbumID, cbSuccess, cbError);
    }

    updateRequestRepostAlbum(AlbumID, cbSuccess, cbError) {
        this.getHTTP(this.Repost_Request_Album_Update_Endpoint + '/' + AlbumID, cbSuccess, cbError);
    }

    updatePublishAlbum(AlbumID, cbSuccess, cbError) {
        this.getHTTP(this.Publish_Album_Update_Endpoint + '/' + AlbumID, cbSuccess, cbError);
    }

    getReadingLanguages(ProfileID, cbSuccess, cbError) {
        this.getHTTP(this.Reading_Languages_By_Profile_Endpoint + ProfileID, cbSuccess, cbError);
    }

    getAlbumAvailability(ProfileID, cbSuccess, cbError) {
        this.getHTTP(this.Album_Availability_Endpoint + ProfileID, cbSuccess, cbError);
    }

    getProfileTypes(cbSuccess, cbError) {
        this.getHTTP(this.Profile_Types_Endpoint, cbSuccess, cbError);
    }

    async getProfileTypes() {
        return this.getAsyncHTTP(this.Profile_Types_Endpoint);
    }

    //Story_Settings_Endpoint Profile_Bookmark_Endpoint
    updateBookmark(ProfileID, RequestedProfileID, cbSuccess, cbError) {
        this.getHTTP(this.Profile_Bookmark_Endpoint + ProfileID + '/' + RequestedProfileID, cbSuccess, cbError);
    }

    getAsyncStorySettings(ProfileID, CategoryParentID, IsProfileConfirmed) {
        return this.getAsyncHTTP(this.Story_Settings_Endpoint + ProfileID + '/' + CategoryParentID + '/' + IsProfileConfirmed);
    }

    //Forget_Password_Request_Endpoint
    forgetPassword(ProfileEmail, cbSuccess, cbError) {
        this.getHTTP(this.Forget_Password_Request_Endpoint + '/' + ProfileEmail, cbSuccess, cbError);
    }

    getCities(CountryID, cbSuccess, cbError) {
        this.getHTTP(this.Cities_Endpoint + '/' + CountryID, cbSuccess, cbError);
    }

    getCountriesByKeyword(Keyword, cbSuccess, cbError) {
        this.getHTTP(this.Countries_Endpoint + '/' + Keyword, cbSuccess, cbError);
    }

    getCountires(cbSuccess, cbError) {
        this.getHTTP(this.Countries_Endpoint, cbSuccess, cbError);
    }

    getActivityTypes(ActivityTypeParentID, cbSuccess, cbError) {
        this.getHTTP(this.Activity_Types_Endpoint + '/' + ActivityTypeParentID, cbSuccess, cbError);
    }

    getContentRatings(cbSuccess, cbError) {
        this.getHTTP(this.Content_Ratings_Endpoint, cbSuccess, cbError);
    }

    getLanguages(cbSuccess, cbError) {
        this.getHTTP(this.Languages_Endpoint, cbSuccess, cbError);
    }

    getQuotes(cbSuccess, cbError) {
        this.getHTTP(this.Quotes_Endpoint, cbSuccess, cbError);
    }

    getAsyncContentTypes(ContentTypeID) {
        return this.getAsyncHTTP(this.Content_Types_Endpoint + ContentTypeID);
    }

    getAlbumDetail(ProfileID, AlbumID, deviceWidth, cbSuccess, cbError) {
        this.getHTTP(this.Album_Detail_Endpoint + AlbumID + '/' + ProfileID + '/' + deviceWidth + '/', cbSuccess, cbError);
    }

    getProfileSubscribes(ProfileID, cbSuccess, cbError) {
        this.getHTTP(this.Profile_Subscribes_Endpoint + ProfileID, cbSuccess, cbError);
    }

    getMicroAppFullname(ProfileID, cbSuccess, cbError) {
        this.getHTTP(this.MicroApp_ProfileFullname_Endpoint + ProfileID, cbSuccess, cbError);
    }

    getMicroAppSubscribeStatus(ProfileID, MicroAppID, cbSuccess, cbError) {
        this.getHTTP(this.MicroApp_Subscribe_Status_Endpoint + ProfileID + '/' + MicroAppID, cbSuccess, cbError);
    }

    getMiniProfile(ProfileID, RequestedProfileID, cbSuccess, cbError) {
        this.getHTTP(this.Mini_Profile_Detail_Endpoint + ProfileID + '/' + RequestedProfileID + '/', cbSuccess, cbError);
    }

    getProfileSubscribeInApp(Mode, ProfileID, UserProfileID, cbSuccess, cbError) {
        this.getHTTP(this.Profile_Subscribe_In_App_Endpoint + Mode + '/' + ProfileID + '/' + UserProfileID + '/', cbSuccess, cbError);
    }

    getProfileSubscribe(Mode, ProfileID, UserProfileID, cbSuccess, cbError) {
        this.getHTTP(this.Profile_Subscribe_Endpoint + Mode + '/' + ProfileID + '/' + UserProfileID + '/', cbSuccess, cbError);
    }

    getComments(ContentID, Size, Page, cbSuccess, cbError) {
        this.getHTTP(this.Comments_Endpoint + ContentID + '/' + Size + '/' + Page + '/', cbSuccess, cbError);
    }

    getAsyncProfileSettingHotSpot(ProfileID) {
        return this.getAsyncHTTP(this.Profile_Setting_HotSpot + ProfileID);
    }

    getProfileAccountSetting(ProfileID, cbSuccess, cbError) {
        this.getHTTP(this.Profile_Account_Setting_Endpoint + ProfileID, cbSuccess, cbError);
    }

    // getProfileAccountSetting(cbSuccess, cbError){
    //     this.getHTTP(this.Profile_Account_Setting_Endpoint + "1010", cbSuccess, cbError);
    // }

    getProfileManagement(UserID, cbSuccess, cbError) {
        this.getHTTP(this.Profile_Management_Endpoint + UserID, cbSuccess, cbError);
    }

    getAlbumAvailabilities(ProfileID, cbSuccess, cbError) {
        this.getHTTP(this.Album_Availabilities_Endpoint + ProfileID, cbSuccess, cbError);
    }

    getCategories(ProfileID, cbSuccess, cbError) {
        this.getHTTP(this.Category_Endpoint + ProfileID, cbSuccess, cbError);
    }

    getCategoriesByParentID(CategoryParentID, cbSuccess, cbError) {
        this.getHTTP(this.Category_By_ParentID_Endpoint + CategoryParentID, cbSuccess, cbError);
    }

    getCategoriesBySearch(Keyword, cbSuccess, cbError) {
        this.getHTTP(this.Category_By_Search_Endpoint + Keyword, cbSuccess, cbError);
    }

    //
    getIndustriesByKeyword(keyword, cbSuccess, cbError) {
        this.getHTTP(this.Industries_By_Keyword_Endpoint + keyword, cbSuccess, cbError);
    }

    getIndustries(cbSuccess, cbError) {
        this.getHTTP(this.Industries_Endpoint, cbSuccess, cbError);
    }

    getAlbumsByFilter(data, cbSuccess, cbError) {
        this.postHTTP(this.Albums_Filter_Endpoint, cbSuccess, cbError, data);
    }

    getLoginAttempt(data, cbSuccess, cbError) {
        this.postHTTP(this.Login_Attempt_Endpoint, cbSuccess, cbError, data);
    }

    registerAutoNewUser(cbSuccess, cbError) {
        this.getHTTP(this.Register_Auto_New_User_Endpoint, cbSuccess, cbError);
        //Return int, ProfileID
    }

    postRegisterProfileToken(data, cbSuccess, cbError) {
        this.postHTTP(this.Register_Profile_Token_Endpoint, cbSuccess, cbError, data);
    }

    postNewComment(data, cbSuccess, cbError) {
        this.postHTTP(this.New_Comment_Endpoint, cbSuccess, cbError, data);
    }

    postProfileUpdateFullname(data, cbSuccess, cbError) {
        this.postHTTP(this.Profile_Update_Fullname_Endpoint, cbSuccess, cbError, data);
    }

    postNotificationStory(data){
        return this.postAsyncHTTPV2Notification(data);
    }

    getHTTP(url, cbSuccess, cbError) {
        // fetch(url, {
        //     headers: {
        //         'Accept-Language': 'en'
        //     },
        // })
        //     .then(res => res.json())
        //     .then(res => {
        //         cbSuccess(res);
        //     })
        //     .catch(error => {
        //         cbError(error);
        //     });

        const token = localStorage.getItem("token");
        let headers = null;
        if (token) {
            headers = {'Authorization': `Bearer ${token}`};
        }

        axios(
            {
                method: 'get',
                url: url,
                headers: {
                    'Accept-Language': languageCode,
                    ...headers
                }
            }
        ).then(response => {
                console.log(response, 'axios');
                cbSuccess(response.data)
            }
        ).catch(error => {
                console.log(error, 'axios');
                cbError(error);
            }
        );
    }

    async uploadPhoto(filename, photoType, data) {
        return await axios.post(`${BASE_URL_V2}images/name?ImageName=${filename}&MasterFileName=${photoType}`, data);
    }

    async getAsyncHTTP(url) {
        const token = localStorage.getItem("token");
        let headers = null;

        if (token) {
            headers = {'Authorization': `Bearer ${token}`};
        }

        return await axios(
            {
                method: 'get',
                url: url,
                headers: {
                    'Accept-Language': languageCode,
                    ...headers
                }
            }
        );
    }

    async deleteAsyncHTTP(url) {
        const token = localStorage.getItem("token");
        let headers = null;

        if (token) {
            headers = {'Authorization': `Bearer ${token}`};
        }

        return await axios(
            {
                method: 'delete',
                url: url,
                headers: {
                    'Accept-Language': languageCode,
                    ...headers
                }
            }
        );
    }

    async postAsyncHTTPV2(url, data) {

        const token = localStorage.getItem("token");
        let headers = null;

        if (token) {
            headers = {'Authorization': `Bearer ${token}`};
        }

        return await axios(
            {
                method: 'post',
                url: url,
                data: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Accept-Language': languageCode,
                    ...headers
                }
            }
        )
    }

    async postAsyncHTTPV2Notification(data) {

        let headers = {'Authorization': `key=AAAAH1qDRKw:APA91bHX1I5ohgU4_gm42LmgFf7Gem_7gxq0-TlXYXptzXGnpBj4i9pw2o7Um3CUqT03YUN0HwmqgtdHqWCYhMh8LZUAX0jSHja4GJYnNebGo8B_i5Q4IzZaY1wk6F52XSM3u-OA6FHo`};

        return await axios(
            {
                method: 'post',
                url: 'https://fcm.googleapis.com/fcm/send',
                data: data,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                }
            }
        )
    }


    getAxiosCategory() {
        return axios.get(this.Languages_Endpoint, this.instance);
    }

    getAxiosIndustry() {
        return axios.get(this.Industries_Endpoint, this.instance);
    }

    getAll() {
        axios.all([this.getAxiosCategory(), this.getAxiosIndustry()])
            .then(axios.spread(function (acct, perms) {
                console.log(acct.data, 'getAll');
                console.log(perms.data, 'getAll');
            }));
    }

    postHTTP(url, cbSuccess, cbError, data) {
        //console.log(url, data, 'postHTTP');
        // axios({
        //     method: 'post';
        //     url: url,
        //     data: data,
        //     headers: {
        //         'Accept-Language': 'en'
        //     }
        // })
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // }).then(res => res.json())
        //     .then(res => {
        //         cbSuccess(res);
        //     })
        //     .catch(error => {
        //         cbError(error);
        //     });


        axios(
            {
                method: 'post',
                url: url,
                data: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Accept-Language': languageCode
                }
            }
        ).then(response => {
                //console.log(response, 'axios');
                cbSuccess(response.data)
            }
        ).catch(error => {
                //console.log(error, 'axios');
                cbError(error.data);
            }
        );
    }

    async postAsyncHTTP(url, cbSuccess, cbError, data) {
        console.log(url, data, 'postAsyncHTTP');

        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            // Handle error
            cbError(error);
            console.log(error, 'async post');
        }

        // fetch(url, {
        //     method: 'POST';
        //     headers: {
        //         'Accept': 'application/json';
        //         'Content-Type': 'application/json';
        //     },
        //     body: JSON.stringify(data)
        // }).then(res => res.json())
        //     .then(res => {
        //         cbSuccess(res);
        //     })
        //     .catch(error => {
        //         cbError(error);
        //     });
    }

    checkObject(obj, prop) {
        let parts = prop.split('.');
        for (let i = 0, l = parts.length; i < l; i++) {
            let part = parts[i];
            if (obj !== null && typeof obj === "object" && part in obj) {
                obj = obj[part];
            }
            else {
                return false;
            }
        }
        return true;
    }

    removeDuplicateValue(a) {
        return Array.from(new Set(a));
    }

    saveData(value) {
        //AsyncStorage.setItem("profileID", value);
    }

    saveItemData(key, value) {
        //AsyncStorage.setItem(key, JSON.stringify(value));
    }

    getData(key) {
        //return AsyncStorage.getItem(key);
    }

    // getExpireTitle(dataType) {
    //     switch (dataType) {
    //         case "d":
    //             return parentLanguages.timeDayTitle;
    //             break;
    //         case "h":
    //         case "hs":
    //             return parentLanguages.timeHourTitle;
    //             break;
    //         case "m":
    //         case "mins":
    //             return parentLanguages.timeMinTitle;
    //             break;
    //         case "sec":
    //             return parentLanguages.timeSecTitle;
    //             break;
    //         default:
    //             return parentLanguages.expiredTitle;
    //             break;
    //     }
    // }
    //
    // getExpireValue(dataType) {
    //
    //     let valueType = "m";
    //
    //     var hours = (dataType / (60)).toFixed(0);
    //
    //     var days = (dataType / (60 * 24)).toFixed(0);
    //
    //     if (dataType < 60) {
    //         valueType = "m";
    //     } else if (hours < 24) {
    //         valueType = "h";
    //     } else {
    //         valueType = "d";
    //     }
    //
    //     switch (valueType) {
    //         case "d":
    //             return '  ' + days + ' ' + parentLanguages.timeDayTitle;
    //             break;
    //         case "h":
    //         case "hs":
    //             return '  ' + hours + ' ' + parentLanguages.timeHourTitle;
    //             break;
    //         case "m":
    //             return '  ' + dataType + ' ' + parentLanguages.timeMinTitle;
    //             break;
    //         case "sec":
    //             return parentLanguages.timeSec;
    //             break;
    //         case "expired":
    //             return parentLanguages.expiredTitle;
    //             break;
    //     }
    // }
    //
    // getExpireValueForStorySetting(dataType) {
    //
    //     let valueType = "m";
    //
    //     var hours = (dataType / (60)).toFixed(0);
    //
    //     var days = (dataType / (60 * 24)).toFixed(0);
    //
    //     if (dataType < 60) {
    //         valueType = "m";
    //     } else if (hours < 24) {
    //         valueType = "h";
    //     } else {
    //         valueType = "d";
    //     }
    //
    //     switch (valueType) {
    //         case "d":
    //             return '  ' + days + ' ' + parentLanguages.timeDay;
    //             break;
    //         case "h":
    //         case "hs":
    //             return '  ' + hours + ' ' + parentLanguages.timeHour;
    //             break;
    //         case "m":
    //             return '  ' + dataType + ' ' + parentLanguages.timeMin;
    //             break;
    //         case "sec":
    //             return parentLanguages.timeSec;
    //             break;
    //         case "expired":
    //             return parentLanguages.expiredTitle;
    //             break;
    //     }
    // }
    //
    // getExpireValueForStorySettingTitle(dataType) {
    //
    //     let valueType = "m";
    //
    //     var hours = (dataType / (60)).toFixed(0);
    //
    //     var days = (dataType / (60 * 24)).toFixed(0);
    //
    //     if (dataType < 60) {
    //         valueType = "m";
    //     } else if (hours < 24) {
    //         valueType = "h";
    //     } else {
    //         valueType = "d";
    //     }
    //
    //     switch (valueType) {
    //         case "d":
    //             return days + ' ' + parentLanguages.timeDay;
    //             break;
    //         case "h":
    //         case "hs":
    //             return hours + ' ' + parentLanguages.timeHour;
    //             break;
    //         case "m":
    //             return dataType + ' ' + parentLanguages.timeMin;
    //             break;
    //         case "sec":
    //             return parentLanguages.timeSec;
    //             break;
    //         case "expired":
    //             return parentLanguages.expiredTitle;
    //             break;
    //     }
    // }
}

let httpRequest = new HttpRequest();
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         // You can now say this.props.createBook
//         authenticationLogin: username => dispatch(authenticationActions.authentication(username)),
//         authenticationLogout: () => dispatch(authenticationActions.logout()),
//     }
// };

// Use connect to put them together
//export default connect(mapDispatchToProps)(httpRequest);

export default httpRequest;