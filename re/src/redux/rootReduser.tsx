import { combineReducers } from "redux";
import { contentReducer } from "./about/aboutPageReducer";
import { footerReducer } from "./footer/footerReducer";
import { mainPageReducer } from "./mainPage/mainPageReducer";
import { postReducer, postsReducer } from "./posts/postsReducer";

export const rootReducer = combineReducers({
mainPage: mainPageReducer,
footer: footerReducer,
posts: postsReducer,
post: postReducer,
content: contentReducer
})

export type RootState = ReturnType<typeof rootReducer>;
