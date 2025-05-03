import { BehanceIconColored, DribbleIconColored, FacebookIcon, FacebookIconColored, GithubIcon, InstagramIconColored, LinkedinIcon, TwitterIcon } from "../assets/icons/icons";

export const ROUTES = {
    HOME: "/",
};

export const SOCIAL_MEDIA = {
    INSTAGRAM: "http://www.instagram.com/ilovepreeet_",
    YOUTUBE: "https://youtube.com/@LovepreetSingh-rp5fr?si=4KRG7g6P3UpS0PSs",
    DRIBBLE: "",
    TWITTER: "",
    LINKEDIN: "",
    FACEBOOK: "",
    MAIL: "youarebest119@gmail.com",
    DOMAIN: "",
    GITHUB: "https://github.com/youarebest119",
    WHATSAPP: "",
    PHONE: "+91 85570 21323",
    BEHANCE: "",
};

export const CONTENT = {
    BANNER_HELLO: "Hello",
    BANNER_NAME: ["KUON", "YAGI"],
    BANNER_TEXT: ["Welcome, where pixels party and code has a sense of humor.", "Join the digital fiesta!"],
    ABOUT_HELLO: ["I'm Kuon Yagi, your friendly neighborhood web wizard.", "Turning coffee into code since 1886."],
    PORTFOLIO_HELLO: "Behold, a gallery of websites that are cooler than the other side of the pillow. Enjoy the vibes.",
    TESTIMONIAL_HELLO: "People say working with me is like finding a Wi-Fi signal in the middle of nowhere – surprisingly pleasant.",
    CONTACT_HELLO: "Need a web whisperer? Drop me a line.",
};

export const LIST_CONTENT = {
    HEADER_NAV: [
        {
            to: "banner",
        },
        {
            to: "about-me",
        },
        {
            to: "skills",
        },
        {
            to: "portfolio",
        },
        {
            to: "social-media",
        },
        {
            to: "testimonials",
        },
        {
            to: "contact",
        },
    ],
    SOCIAL_MEDIA: [
        {
            label: "Dribble",
            icon: DribbleIconColored,
            to: SOCIAL_MEDIA.DRIBBLE,
        },
        {
            label: "Facebook",
            icon: FacebookIconColored,
            to: SOCIAL_MEDIA.FACEBOOK,
        },
        {
            label: "Instagram",
            icon: InstagramIconColored,
            to: SOCIAL_MEDIA.INSTAGRAM,
        },
        {
            label: "Behance",
            icon: BehanceIconColored,
            to: SOCIAL_MEDIA.BEHANCE,
        },
    ],
    SIDEBAR_NAV: [
        {
            index: 1,
            to: "/",
            label: "Homepage",
        },
        {
            index: 2,
            to: "/",
            label: "About Us",
        },
        {
            index: 3,
            to: "/",
            label: "Contact Us",
        },
        {
            index: 4,
            to: "/",
            label: "Portfolio",
        },
    ],
    SIDEBAR_SOCIAL_MEDIA: [
        {
            to: SOCIAL_MEDIA.GITHUB,
            index: 1,
            icon: GithubIcon,
            key: "github",
        },
        {
            to: SOCIAL_MEDIA.FACEBOOK,
            index: 2,
            icon: FacebookIcon,
            key: "facebook",
        },
        {
            to: SOCIAL_MEDIA.TWITTER,
            index: 3,
            icon: TwitterIcon,
            key: "twitter",
        },
        {
            to: SOCIAL_MEDIA.LINKEDIN,
            index: 4,
            icon: LinkedinIcon,
            key: "linkedin",
        },
    ],
    SKILLS: [
        {
            title: "Graphic Design",
        },
        {
            title: "Web Design",
        },
        {
            title: "HTML/CSS",
        },
        {
            title: "UI/UX Design",
        },
        {
            title: "Prototyping",
        },
        {
            title: "Design Principles",
        },
        {
            title: "Creativity",
        },
    ],
    ABOUT: [
        { title: "Projects", count: 100 },
        { title: "Members", count: 10 },
        { title: "Years", count: 227 },
        { title: "Awards", count: 5 },
    ]
};