export const SequenceIcon = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M0.062829 99.1428L23.1727 53.2861C18.8869 47.6097 16.3823 40.531 16.4831 32.8691C16.7173 14.9206 31.4451 0.259516 49.5044 0.00323521C67.5638 -0.253046 83.5187 14.7497 83.5187 33.3139C83.5187 40.8079 81.029 47.7216 76.8261 53.2891L99.936 99.1457C100.135 99.5375 99.8471 100 99.4055 100H0.593387C0.151759 100 -0.132791 99.5375 0.062829 99.1457V99.1428Z" fill="url(#paint0_linear_2157_50914)"></path>
        <path d="M0.062829 99.1428L23.1727 53.2861C18.8869 47.6097 16.3823 40.531 16.4831 32.8691C16.7173 14.9206 31.4451 0.259516 49.5044 0.00323521C67.5638 -0.253046 83.5187 14.7497 83.5187 33.3139C83.5187 40.8079 81.029 47.7216 76.8261 53.2891L99.936 99.1457C100.135 99.5375 99.8471 100 99.4055 100H0.593387C0.151759 100 -0.132791 99.5375 0.062829 99.1457V99.1428Z" fill="url(#pattern-home-animate-key-0)" fillOpacity="0.34"></path>
        <defs>
            <pattern id="pattern-home-animate-key-0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use transform="scale(0.000750751)"></use>
            </pattern>
            <linearGradient id="paint0_linear_2157_50914" x1="32.5444" y1="9.6827" x2="77.5148" y2="100.215" gradientUnits="userSpaceOnUse">
                <stop offset="0.198661" stopColor="#F7BDF8"></stop>
                <stop offset="1" stopColor="#2F3CC0"></stop>
            </linearGradient>
        </defs>
    </svg>
)
export const SnapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 99 99" aria-hidden="true">
        <path fill="url(#paint0_linear_2163_48870)" d="M98.59 49.09 49.91.41a.579.579 0 0 0-.82 0L.41 49.09a.579.579 0 0 0 0 .82l48.68 48.68a.579.579 0 0 0 .82 0l48.68-48.68a.579.579 0 0 0 0-.82Z"></path>
        <path fill="url(#pattern0)" fillOpacity=".6" d="M98.59 49.09 49.91.41a.579.579 0 0 0-.82 0L.41 49.09a.579.579 0 0 0 0 .82l48.68 48.68a.579.579 0 0 0 .82 0l48.68-48.68a.579.579 0 0 0 0-.82Z" ></path>
        <defs>
            <linearGradient id="paint0_linear_2163_48870" x1="60.816" x2="38.263" y1="20.902" y2="87.976" gradientUnits="userSpaceOnUse">
                <stop offset=".199" stopColor="#F7BDF8"></stop>
                <stop offset="1" stopColor="#2F3CC0"></stop>
            </linearGradient>
            <pattern id="pattern0" width="2.857" height="2.857" patternContentUnits="objectBoundingBox">
                <use transform="scale(.00571)"></use>
            </pattern>
        </defs>
    </svg>
)

export const Curves = () => (
    <>
        <svg width="191" height="149" viewBox="0 0 191 149" fill="none" xmlns="http://www.w3.org/2000/svg" id="home-animate__icon--curve" aria-hidden="true">
            <path
                id="curve"
                d="M188 3 C74.39 3 116.99 146 3 145.99"
                stroke="#FFFCE1"
                strokeWidth="5"
                data-original="M3 146C116.996 146 74.3933 3.00001 188 3"
            ></path>
            <path
                id="semi-circle"
                d="M188 33.0001C188 160 2.99953 161 2.99955 33.0001"
                stroke="#FFFCE1"
                strokeWidth="5"
                visibility={"hidden"}
                data-original="M3 146C116.996 146 74.3933 3.00001 188 3"
            ></path>
        </svg>

        <svg width="150" height="18" viewBox="0 0 150 18" fill="none" xmlns="http://www.w3.org/2000/svg" id="curved-line-toggle-one" className="curve-toggle curve-toggle--one" aria-hidden="true">
            <line id="curved-line-toggle-one-dashed-line" x1="136.68" y1="8.18018" x2="14.6797" y2="8.18017" stroke="#FFFCE1" strokeDasharray="4 4"></line>
            <path id="curved-line-toggle-one-circle" d="M5.89417 13.7658C8.59652 15.4585 12.1379 14.6255 13.8042 11.9052C15.4704 9.18497 14.6305 5.60759 11.9282 3.91493C9.22584 2.22227 5.68439 3.05531 4.01814 5.77556C2.3519 8.49582 3.19183 12.0732 5.89417 13.7658Z" fill="#0AE448" stroke="#FFFCE1" strokeMiterlimit="10"></path>
            <rect id="curved-line-toggle-one-box" x="133.5" y="0.5" width="16" height="16" fill="url(#curved-line-toggle-one-gradient)"></rect>
            <rect id="curved-line-toggle-one-box" x="133.5" y="0.5" width="16" height="16" fill="url(#curved-line-toggle-one-noise)" fillOpacity="0.6"></rect>
            <rect id="curved-line-toggle-one-box" x="133.5" y="0.5" width="16" height="16" stroke="#FFFCE1"></rect>
            <defs>
                <pattern id="curved-line-toggle-one-noise" patternContentUnits="objectBoundingBox" width="11.7647" height="11.7647">
                    <use transform="scale(0.0235294)"></use>
                </pattern>
                <linearGradient id="curved-line-toggle-one-gradient" x1="133.794" y1="4.26589" x2="146.855" y2="10.1922" gradientUnits="userSpaceOnUse">
                    <stop offset="0.152177" stopColor="#0AE448"></stop>
                    <stop offset="0.854509" stopColor="#ABFF84"></stop>
                </linearGradient>
            </defs>
        </svg>

        <svg width="150" height="18" viewBox="0 0 150 18" fill="none" xmlns="http://www.w3.org/2000/svg" id="curved-line-toggle-two" className="curve-toggle curve-toggle--two" aria-hidden="true" >
            <line x1="13.4766" y1="9.49707" x2="135.477" y2="9.49709" stroke="#FFFCE1" strokeDasharray="4 4"></line>
            <rect x="16.6563" y="17.1772" width="16" height="16" transform="rotate(-180 16.6563 17.1772)" fill="url(#curved-line-toggle-two-gradient)"></rect>
            <rect x="16.6563" y="17.1772" width="16" height="16" transform="rotate(-180 16.6563 17.1772)" fill="url(#curved-line-toggle-two-noise)" fillOpacity="0.6"></rect>
            <rect x="16.6563" y="17.1772" width="16" height="16" transform="rotate(-180 16.6563 17.1772)" stroke="#FFFCE1"></rect>
            <path d="M144.262 3.91141C141.56 2.21875 138.018 3.05176 136.352 5.77202C134.686 8.49227 135.526 12.0697 138.228 13.7623C140.93 15.455 144.472 14.6219 146.138 11.9017C147.804 9.18143 146.964 5.60407 144.262 3.91141Z" fill="#0AE448" stroke="#FFFCE1" strokeMiterlimit="10"></path>
            <defs>
                <pattern id="curved-line-toggle-two-noise" patternContentUnits="objectBoundingBox" width="11.7647" height="11.7647">
                    <use transform="scale(0.0235294)"></use>
                </pattern>
                <linearGradient id="curved-line-toggle-two-gradient" x1="0.793615" y1="5.30886" x2="13.855" y2="11.2352" gradientUnits="userSpaceOnUse">
                    <stop offset="0.152177" stopColor="#0AE448"></stop>
                    <stop offset="0.854509" stopColor="#ABFF84"></stop>
                </linearGradient>
            </defs>
        </svg>

    </>
)

export const Star = () => (
    <svg width="124" height="124" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 124 124" aria-hidden="true">
        <path fill="#fff" fillRule="evenodd" d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z" clipRule="evenodd"></path>
        <path fill="url(#paint0_radial_2080_57111)" fillRule="evenodd" d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z" clipRule="evenodd"></path>
        <path fill="url(#pattern-home-animate-asterisk-0)" fillRule="evenodd" d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z" clipRule="evenodd" ></path>
        <defs>
            <radialGradient id="paint0_radial_2080_57111" cx="0" cy="0" r="1" gradientTransform="rotate(-90 63.541 25.385) scale(97.6761)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFEBE7"></stop>
                <stop offset=".672" stopColor="#FF9C7C"></stop>
                <stop offset=".816" stopColor="#FF9983"></stop>
                <stop offset=".901" stopColor="#FF774B"></stop>
                <stop offset="1" stopColor="#E76F00"></stop>
            </radialGradient>
            <pattern id="pattern-home-animate-asterisk-0" width=".806" height=".806" patternContentUnits="objectBoundingBox">
                <use transform="scale(.00161)"></use>
            </pattern>
        </defs>
    </svg>
)