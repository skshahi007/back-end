import { loginRoute } from "../api/login.js";
import { signupRoute } from "../api/signup.js";


//admin
import {adminLoginRoute } from "../admin-api/admin-login.js";
import { adminSignupRoute } from "../admin-api/admin-signup.js"
import { addCourseName } from "../admin-api/add-courses.js";
import {getCourses} from "../course-api/get-courses.js";
import {addSubjectName } from "../admin-api/add-subject.js";
import { addCodeName } from "../admin-api/just.js";
import { addQuestion } from "../questions/add-question.js";
import { getQuestions } from "../questions/get-questions.js";
import { deleteQuestion } from "../questions/delete-question.js";
import { updateQuestion } from "../questions/update-question.js";
import { getChapters } from "../course-api/get-chapters.js";
import { addSet } from "../admin-api/add-set.js";
import { getSetsList } from "../course-api/get-set-list.js";
import { getQuestion } from "../questions/get-question.js";
import { getGoogleOauthUrlRoute } from "../api/getGooleOauthRouteUrl.js";
import { googleCallbackOauthRoute } from "../api/googleCallbackOauthRoute.js";
import { adminGetGoogleOauthUrlRoute } from "../admin-api/adminGetGooleOauthRouteUrl.js";
import { adminGoogleCallbackOauthRoute } from "../admin-api/adminGoogleCallbackOauthRoute.js";


export const routes = [
    loginRoute,
    signupRoute,
    adminLoginRoute,
    adminSignupRoute,   
    addCourseName,
    getCourses,
    addSubjectName,
    addCodeName,
    addQuestion,
    getQuestions,
    getQuestion,
    deleteQuestion,
    updateQuestion,
    getChapters,
    addSet,
    getSetsList,
    getGoogleOauthUrlRoute,
    googleCallbackOauthRoute,
    adminGetGoogleOauthUrlRoute,
    adminGoogleCallbackOauthRoute,

]
