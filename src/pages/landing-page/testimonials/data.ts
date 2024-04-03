import guy1 from "../images/guy1.png";
import guy2 from "../images/guy2.png";
import lady from "../images/lady.png";

const data = [
    {
        id: 1,
        image: guy1,
        name: "Jason Herzog",
        title: "Project Manager at Google",
        rating: Array(5).fill(null),
        description:
            "Projectify App is a game-changer for project management. Its user-friendly interface and intuitive features make handling multiple projects a breeze."
    },
    {
        id: 2,
        image: guy2,
        name: "Gerald Rivera",
        title: "Staff Engineer at Meta",
        rating: Array(4).fill(null),
        description:
            "Discovering Projectify App has revolutionized the way we handle projects. Its robust set of tools simplifies complex tasks, making project management less daunting."
    },
    {
        id: 3,
        image: lady,
        name: "Ashley Bennett",
        title: "UX/UI Designer at Uber",
        rating: Array(5).fill(null),
        description:
            "Projectify App exceeded all our expectations. Its comprehensive suite of features empowers us to manage projects with precision and agility."
    }
];

export default data;
