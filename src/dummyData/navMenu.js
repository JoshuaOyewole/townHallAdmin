import {
    homeIcon,
    organizations,
    memberIcon,
    electionIcon,
  } from "../assets/assets";

export const navMenuData = [
    {
        path:"/",
        routeName:"Home",
        icon:homeIcon
    },
    {
        path:"/org",
        routeName:"Organizations",
        icon:organizations
    },
    {
        path:"/members",
        routeName:"Members",
        icon:memberIcon
    },
    {
        path:"/post_management",
        routeName:"Post Management",
        icon:memberIcon
    },
    {
        path:"/election",
        routeName:"Election",
        icon:electionIcon
    }
]