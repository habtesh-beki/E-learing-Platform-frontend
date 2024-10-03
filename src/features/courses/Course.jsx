const courses = [
    {
    type:'code',
    tembnil:"/images/courses/python1.jfif",
    course:"python beginner",
    discription:"Learn the fundamentals of Python programming, a powerful and versatile language used in web development, data analysis, and automation.",
    profile:"",
    name:"mosh",
    price:500
    },
    {
    type:'code',
    tembnil:"/images/courses/javascript1.jfif",
    course:"javascript advanced",
    discription:"Dive into JavaScript, the language of the web! This course will teach you how to build interactive websites, handle events, manipulate the DOM, and work with APIs.",
    profile:"",
    name:"jonas",
    price:1000
    },
    {
    type:'code',
    tembnil:"/images/courses/nodejs.jfif",
    course:"node.js",
    discription:"Learn how to build fast, scalable, and efficient backend applications using Node.js. This course will cover the fundamentals of server-side JavaScript, working with databases, APIs, and real-time applications, making it perfect for aspiring full-stack developers.",
    profile:"",
    name:"jonas",
    price:800
    },
    {
    type:'marketing',
    tembnil:"/images/courses/marketing1.jfif",
    course:"marketing fandamental",
    discription:"Master the essentials of marketing, including market research, branding, and digital strategies. This course covers key marketing concepts, social media tactics, SEO, and email marketing to help you build and grow your business.",
    profile:"",
    name:"tomas",
    price:900
    },
    {
    type:'marketing',
    tembnil:"/images/courses/marketing2.jfif",
    course:"marketing advanced",
    discription:"Master the essentials of marketing, including market research, branding, and digital strategies. This course covers key marketing concepts, social media tactics, SEO, and email marketing to help you build and grow your business.",
    profile:"",
    name:"hilemarial",
    price:700
    },
    {
    type:'design',
    tembnil:"/images/courses/design1.jfif",
    course:"UI/UX design fandamental",
    discription:"Unleash your creativity with this introduction to design principles, including color theory, typography, and layout. You'll learn to create visually appealing designs for print, web, and mobile platforms using industry-standard tools.",
    profile:"",
    name:"",
    price:200
    },
    {
    type:'illustrator',
    tembnil:"/images/courses/illustration1.jfif",
    course:"illustrator",
    discription:"Explore Adobe Illustrator, the leading vector graphics software, and learn how to create stunning logos, illustrations, and graphic designs.",
    profile:"",
    name:"",
    price:300
    }
]



export default function Course(){
    return <div className="flex h-full">
        <div className="w-3/4" >
         <ul className="flex text-color_text p-4 justify-evenly border-b ">
          <li className="cursor-pointer">All</li>
          <li className="cursor-pointer">Programming</li>
          <li className="cursor-pointer">Design</li>
          <li className="cursor-pointer">Marketing</li>
          <li className="cursor-pointer">Illustration</li>
         </ul>
         <ul>
            {courses.map(course => <CourseList course = {course}/>)}
         </ul>
        </div>
        <div className="border-l border-color_text">
            world
        </div>
    </div>
}

function CourseList({course}){
  return <li>
    <img src={course.tembnil}/>
    <div>
        <h3>{Course.Course}</h3>
        <h3>{Course.price}</h3>
        <h2>{Course.discription}</h2>
        <h4>{Course.type}</h4>
        <button>&#8594;</button>
    </div>
  </li>
}