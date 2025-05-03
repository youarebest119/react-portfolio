import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import styles from "./MakeProgressWhenInView.module.scss";
import LoremText from '../LoremText/LoremText';

const MakeProgressWhenInView = () => {
    const data = [
        {
            title: "Javascript",
            completed: 0.1,
            about: "Lorem ipsum dolor sit, amet consectetur ",
            time: "10 October, 2024",
        },
        {
            title: "C++ Programming",
            completed: 0.8,
            about: "Lorem ipsum dolor sit, amet consectetur ",
            time: "10 October, 2024",
        },
        {
            title: "Python",
            completed: 0.6,
            about: "Lorem ipsum dolor sit, amet consectetur ",
            time: "10 October, 2024",
        },
    ]
    return (
        <div className={styles.section}>
            <LoremText />
            <LoremText />
            <LoremText />
            <LoremText />
            <Container>
                <ul>
                    {
                        data.map(item => (
                            <li>
                                <motion.div
                                    whileHover={{
                                        transition: { duration: 0.5, type: "spring" },
                                        boxShadow: "-20px -20px #D1D0F5",
                                        translateX: 10,
                                        translateY: 10,
                                        cursor: "pointer",
                                        borderColor: "#D1D0F5",
                                    }}
                                    whileTap={{
                                        scale: 0.98
                                    }}
                                    className={styles.card}
                                >
                                    <h3>{item.title}</h3>
                                    <div className={styles.card_in}>
                                        <Progress value={item.completed} />
                                        <div className={styles.card_in_data}>
                                            <p>{item.about}</p>
                                            <span>{item.time}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </li>
                        ))
                    }
                </ul>
            </Container>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas nam recusandae ad vero iure deserunt porro? Sapiente praesentium architecto in sint ut quia nulla ea dolor deserunt, nemo doloribus voluptates incidunt, ipsa unde vitae harum fugiat a aperiam ipsam perferendis repudiandae minima doloremque. Placeat delectus eos incidunt qui. Repellendus, sequi excepturi tempora saepe eos in modi praesentium dolores incidunt illum doloribus, odit facilis officiis quidem esse nostrum explicabo itaque accusantium hic eveniet, aliquam quibusdam eius cumque distinctio. Iusto, ab? Tempora, libero. Commodi atque vero, ea reprehenderit ex alias corporis. Odio est temporibus illum. Atque quaerat, vitae velit molestiae debitis non doloremque et dolore iure animi ut deserunt obcaecati, aliquid voluptates! Laudantium suscipit dignissimos earum tempora, odit hic saepe eius dicta architecto aut, modi inventore perferendis dolorem praesentium nulla autem, ab distinctio voluptatem vel in voluptatibus eos aliquid numquam ipsum? Eveniet voluptatum autem, possimus maxime voluptatibus ratione sunt quaerat quia nemo illo quasi doloremque asperiores libero eius? Explicabo doloribus quas, provident quo exercitationem, ab impedit inventore quos hic alias fugiat esse beatae ipsa. Asperiores, excepturi ullam neque aliquam officia debitis quam possimus placeat dicta blanditiis quisquam quidem est ipsa. Dolor maxime recusandae illo nisi nam eius! Eos aliquam perferendis aspernatur eum deserunt ullam eius quidem ipsum a, in facere obcaecati quibusdam natus dolores laboriosam labore dolorum commodi accusantium nisi esse? Tempore placeat distinctio consequuntur accusamus quae natus architecto inventore possimus. Cupiditate eos mollitia fugit, pariatur ab alias non, vero natus provident quas illo velit animi, modi consectetur ut. Possimus nobis magnam aperiam perspiciatis temporibus voluptatum esse reiciendis corporis. Voluptate cupiditate sunt molestiae aliquam minima! Voluptate impedit mollitia accusamus culpa laudantium. Incidunt maiores animi et ratione voluptatibus consequuntur nam corporis placeat obcaecati, hic voluptatum minus excepturi voluptas esse voluptatem, debitis aliquid dolorum, tenetur ex odit quisquam voluptate eaque? Error voluptatum nihil voluptatem cum eveniet unde qui odio distinctio, ab officiis ut quo dolorem labore? Omnis accusamus culpa commodi. Recusandae, voluptatum repudiandae, quam quae itaque, dolorem id dolor deleniti <br /> est quo ratione necessitatibus? Eum quas enim tenetur inventore minus itaque molestias architecto ullam debitis numquam harum, similique dolorem mollitia repellendus soluta veniam minima. Praesentium quo, unde esse dolorem repellendus, aspernatur consequuntur, eaque ad itaque et asperiores! Fugit distinctio autem, earum eius atque, corrupti laborum aliquam impedit neque perspiciatis quas ea minus dolore odio sit natus error voluptatum ratione! Rerum non, libero ea, laborum facilis molestiae itaque a laudantium animi reprehenderit eaque doloremque quisquam incidunt magni officiis maxime iste. Quis numquam amet, qui iure quisquam quibusdam voluptatibus neque quia eligendi animi voluptatum, nesciunt excepturi voluptate velit natus. Libero sed qui mollitia consectetur. Delectus blanditiis unde quidem inventore dicta. Ullam molestias dolor ea, est, neque animi vitae praesentium eos dolore magnam distinctio, minus ad totam voluptate explicabo perferendis? Necessitatibus autem maiores, similique nam et praesentium ad culpa quae placeat natus numquam vero modi quasi porro beatae laboriosam ex excepturi tenetur deserunt quibusdam suscipit in deleniti rerum sed! Pariatur dolore accusamus optio doloribus nulla natus sit eos eveniet reprehenderit, culpa, voluptatibus, at officiis asperiores eligendi vitae numquam reiciendis assumenda delectus! Animi, sed aliquid non et fugiat nesciunt dolores dicta, repellendus odit sunt ut quidem ex magni quia quibusdam perferendis a aliquam quaerat commodi soluta corporis, sint provident. Amet voluptatibus soluta exercitationem necessitatibus, voluptate <br /> consequatur. Adipisci accusamus illum id modi quaerat. Ut exercitationem veritatis temporibus eos in eum, vero atque laboriosam voluptates! Explicabo nesciunt ipsum velit impedit suscipit voluptates, soluta rem atque beatae, laudantium, placeat reiciendis expedita similique quod eum eveniet sunt error ex eos in consequuntur doloribus! Accusamus, voluptatem minus nam nemo tempore odit quae labore unde suscipit saepe facere officia sit expedita quas nobis ut? Illum fuga tenetur consequatur. Tempora odio architecto rerum provident nobis neque expedita quaerat ipsa sint a quis, ullam asperiores dolor voluptatem earum similique delectus totam suscipit autem voluptates aliquid perferendis, at commodi natus! Reprehenderit adipisci veritatis sed animi laborum. Exercitationem unde, ratione sapiente inventore fugit at impedit voluptatibus dicta repellat explicabo. Eos delectus assumenda corporis placeat impedit quis, cupiditate nam beatae animi fugit nulla? Fugit, quia ipsam voluptatum nemo, aliquam reiciendis excepturi nostrum obcaecati, natus eligendi in officia consectetur ex beatae earum dolorem veritatis esse repellendus. Quae ut similique quaerat nam reiciendis explicabo reprehenderit asperiores dolorem provident magnam obcaecati quos illum, dignissimos, distinctio cumque ipsum repudiandae quod nulla quis sed earum facere? Omnis, unde excepturi sit rem optio eius atque cum alias aspernatur est accusamus, blanditiis quam laudantium sapiente architecto a et saepe adipisci ab consequuntur deleniti nemo molestiae debitis vero! Tempora reiciendis quia saepe porro, eligendi perspiciatis voluptatum corporis veritatis? Nulla ad dolores odit eum soluta officiis minima commodi deserunt, culpa quasi, aliquam quis, quod voluptatem ea ipsam laboriosam enim tenetur explicabo mollitia magnam? Voluptatem molestias voluptate maxime doloribus quae est nihil id ut eligendi eaque ipsam aliquam possimus quidem blanditiis eum, in sint ullam voluptas exercitationem maiores repellendus cum animi. Exercitationem doloremque repellat dolores, impedit ipsa debitis temporibus quae nulla tenetur distinctio, ducimus aspernatur minus nihil consectetur at atque adipisci neque consequuntur eos. Mollitia, omnis a doloribus molestiae obcaecati tempore magni illum cumque ullam quae ut dolores quasi eveniet, impedit provident. Voluptas non debitis aut ut optio ipsum suscipit blanditiis officia maiores sed soluta eos, assumenda voluptates voluptate reprehenderit eligendi. Accusamus nihil placeat iure facere aut accusantium officiis doloribus rerum quas, quaerat, obcaecati exercitationem sit ipsum, distinctio deserunt qui totam mollitia? Molestias reiciendis neque nihil laboriosam, rem hic, architecto totam labore reprehenderit nam, cum animi illo distinctio! Fugiat officiis nulla eaque hic animi quibusdam possimus blanditiis id, aliquid repellendus! Expedita deleniti nesciunt commodi et consectetur error sit laboriosam reiciendis ex iure illum saepe eum dicta similique repellat, eos sint odit? Officiis, error velit! Accusamus, ea aliquam. Hic aspernatur voluptatum suscipit cupiditate odit earum sunt illum animi, deleniti exercitationem distinctio nesciunt deserunt eos, laudantium possimus? Rem beatae ad impedit exercitationem repellat consectetur commodi enim inventore recusandae sequi id itaque soluta voluptate, facere sapiente corporis quo culpa sunt molestiae incidunt. Deserunt totam id repudiandae amet, non doloribus commodi aspernatur reiciendis ipsa molestiae nemo laborum molestias distinctio laudantium deleniti expedita corporis.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas nam recusandae ad vero iure deserunt porro? Sapiente praesentium architecto in sint ut quia nulla ea dolor deserunt, nemo doloribus voluptates incidunt, ipsa unde vitae harum fugiat a aperiam ipsam perferendis repudiandae minima doloremque. Placeat delectus eos incidunt qui. Repellendus, sequi excepturi tempora saepe eos in modi praesentium dolores incidunt illum doloribus, odit facilis officiis quidem esse nostrum explicabo itaque accusantium hic eveniet, aliquam quibusdam eius cumque distinctio. Iusto, ab? Tempora, libero. Commodi atque vero, ea reprehenderit ex alias corporis. Odio est temporibus illum. Atque quaerat, vitae velit molestiae debitis non doloremque et dolore iure animi ut deserunt obcaecati, aliquid voluptates! Laudantium suscipit dignissimos earum tempora, odit hic saepe eius dicta architecto aut, modi inventore perferendis dolorem praesentium nulla autem, ab distinctio voluptatem vel in voluptatibus eos aliquid numquam ipsum? Eveniet voluptatum autem, possimus maxime voluptatibus ratione sunt quaerat quia nemo illo quasi doloremque asperiores libero eius? Explicabo doloribus quas, provident quo exercitationem, ab impedit inventore quos hic alias fugiat esse beatae ipsa. Asperiores, excepturi ullam neque aliquam officia debitis quam possimus placeat dicta blanditiis quisquam quidem est ipsa. Dolor maxime recusandae illo nisi nam eius! Eos aliquam perferendis aspernatur eum deserunt ullam eius quidem ipsum a, in facere obcaecati quibusdam natus dolores laboriosam labore dolorum commodi accusantium nisi esse? Tempore placeat distinctio consequuntur accusamus quae natus architecto inventore possimus. Cupiditate eos mollitia fugit, pariatur ab alias non, vero natus provident quas illo velit animi, modi consectetur ut. Possimus nobis magnam aperiam perspiciatis temporibus voluptatum esse reiciendis corporis. Voluptate cupiditate sunt molestiae aliquam minima! Voluptate impedit mollitia accusamus culpa laudantium. Incidunt maiores animi et ratione voluptatibus consequuntur nam corporis placeat obcaecati, hic voluptatum minus excepturi voluptas esse voluptatem, debitis aliquid dolorum, tenetur ex odit quisquam voluptate eaque? Error voluptatum nihil voluptatem cum eveniet unde qui odio distinctio, ab officiis ut quo dolorem labore? Omnis accusamus culpa commodi. Recusandae, voluptatum repudiandae, quam quae itaque, dolorem id dolor deleniti <br /> est quo ratione necessitatibus? Eum quas enim tenetur inventore minus itaque molestias architecto ullam debitis numquam harum, similique dolorem mollitia repellendus soluta veniam minima. Praesentium quo, unde esse dolorem repellendus, aspernatur consequuntur, eaque ad itaque et asperiores! Fugit distinctio autem, earum eius atque, corrupti laborum aliquam impedit neque perspiciatis quas ea minus dolore odio sit natus error voluptatum ratione! Rerum non, libero ea, laborum facilis molestiae itaque a laudantium animi reprehenderit eaque doloremque quisquam incidunt magni officiis maxime iste. Quis numquam amet, qui iure quisquam quibusdam voluptatibus neque quia eligendi animi voluptatum, nesciunt excepturi voluptate velit natus. Libero sed qui mollitia consectetur. Delectus blanditiis unde quidem inventore dicta. Ullam molestias dolor ea, est, neque animi vitae praesentium eos dolore magnam distinctio, minus ad totam voluptate explicabo perferendis? Necessitatibus autem maiores, similique nam et praesentium ad culpa quae placeat natus numquam vero modi quasi porro beatae laboriosam ex excepturi tenetur deserunt quibusdam suscipit in deleniti rerum sed! Pariatur dolore accusamus optio doloribus nulla natus sit eos eveniet reprehenderit, culpa, voluptatibus, at officiis asperiores eligendi vitae numquam reiciendis assumenda delectus! Animi, sed aliquid non et fugiat nesciunt dolores dicta, repellendus odit sunt ut quidem ex magni quia quibusdam perferendis a aliquam quaerat commodi soluta corporis, sint provident. Amet voluptatibus soluta exercitationem necessitatibus, voluptate <br /> consequatur. Adipisci accusamus illum id modi quaerat. Ut exercitationem veritatis temporibus eos in eum, vero atque laboriosam voluptates! Explicabo nesciunt ipsum velit impedit suscipit voluptates, soluta rem atque beatae, laudantium, placeat reiciendis expedita similique quod eum eveniet sunt error ex eos in consequuntur doloribus! Accusamus, voluptatem minus nam nemo tempore odit quae labore unde suscipit saepe facere officia sit expedita quas nobis ut? Illum fuga tenetur consequatur. Tempora odio architecto rerum provident nobis neque expedita quaerat ipsa sint a quis, ullam asperiores dolor voluptatem earum similique delectus totam suscipit autem voluptates aliquid perferendis, at commodi natus! Reprehenderit adipisci veritatis sed animi laborum. Exercitationem unde, ratione sapiente inventore fugit at impedit voluptatibus dicta repellat explicabo. Eos delectus assumenda corporis placeat impedit quis, cupiditate nam beatae animi fugit nulla? Fugit, quia ipsam voluptatum nemo, aliquam reiciendis excepturi nostrum obcaecati, natus eligendi in officia consectetur ex beatae earum dolorem veritatis esse repellendus. Quae ut similique quaerat nam reiciendis explicabo reprehenderit asperiores dolorem provident magnam obcaecati quos illum, dignissimos, distinctio cumque ipsum repudiandae quod nulla quis sed earum facere? Omnis, unde excepturi sit rem optio eius atque cum alias aspernatur est accusamus, blanditiis quam laudantium sapiente architecto a et saepe adipisci ab consequuntur deleniti nemo molestiae debitis vero! Tempora reiciendis quia saepe porro, eligendi perspiciatis voluptatum corporis veritatis? Nulla ad dolores odit eum soluta officiis minima commodi deserunt, culpa quasi, aliquam quis, quod voluptatem ea ipsam laboriosam enim tenetur explicabo mollitia magnam? Voluptatem molestias voluptate maxime doloribus quae est nihil id ut eligendi eaque ipsam aliquam possimus quidem blanditiis eum, in sint ullam voluptas exercitationem maiores repellendus cum animi. Exercitationem doloremque repellat dolores, impedit ipsa debitis temporibus quae nulla tenetur distinctio, ducimus aspernatur minus nihil consectetur at atque adipisci neque consequuntur eos. Mollitia, omnis a doloribus molestiae obcaecati tempore magni illum cumque ullam quae ut dolores quasi eveniet, impedit provident. Voluptas non debitis aut ut optio ipsum suscipit blanditiis officia maiores sed soluta eos, assumenda voluptates voluptate reprehenderit eligendi. Accusamus nihil placeat iure facere aut accusantium officiis doloribus rerum quas, quaerat, obcaecati exercitationem sit ipsum, distinctio deserunt qui totam mollitia? Molestias reiciendis neque nihil laboriosam, rem hic, architecto totam labore reprehenderit nam, cum animi illo distinctio! Fugiat officiis nulla eaque hic animi quibusdam possimus blanditiis id, aliquid repellendus! Expedita deleniti nesciunt commodi et consectetur error sit laboriosam reiciendis ex iure illum saepe eum dicta similique repellat, eos sint odit? Officiis, error velit! Accusamus, ea aliquam. Hic aspernatur voluptatum suscipit cupiditate odit earum sunt illum animi, deleniti exercitationem distinctio nesciunt deserunt eos, laudantium possimus? Rem beatae ad impedit exercitationem repellat consectetur commodi enim inventore recusandae sequi id itaque soluta voluptate, facere sapiente corporis quo culpa sunt molestiae incidunt. Deserunt totam id repudiandae amet, non doloribus commodi aspernatur reiciendis ipsa molestiae nemo laborum molestias distinctio laudantium deleniti expedita corporis.
            </p>
            <br />
        </div>
    )
}


const Progress = ({ value }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        // once: true,
    });
    return (
        <div ref={ref} className={styles.circular_progress}>
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="2" className={styles.indicator_bg} />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="2"
                    strokeLinecap="round"
                    className={styles.indicator}
                    animate={{
                        pathLength: isInView ? value : 0,
                        transition: {
                            duration: 1,
                            delay: 0.4,
                            type: "spring",
                            ease: "easeInOut"
                        }
                    }}
                />
            </svg>
        </div>
    )
}

export default MakeProgressWhenInView
