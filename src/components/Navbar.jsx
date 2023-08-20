import PropTypes from 'prop-types'


const obj = {    
    src:"https://d.newsweek.com/en/full/1805840/dog-young-boy.jpg?w=1600&h=1200&q=88&f=4726bc9627f157e80c81176a53fae3f2",
    weidth:"900px",
    height:"600px"
}  


function Navbar({src, width, height}){
    return(
        <>
        <img src = {src} width = {width} height= {height} />
        



        {/* <h1>Hello I'm {props.Name} </h1>
        <p>{props.Paragraph}</p> */}
        </>
    )
}



// // this is only help for props to do help us which type of vlue will send.
// Navbar.prototype = {
//     Name: prototype.string.isRequired,
//     Paragraph: prototype.string
// }

// // default props when someone no one pass props then default is automatic put there vlue where is necessary
// Navbar.defaultProps = {
//     Name: "Mitu kumar",
//     Paragraph: "This is a perfect man."
// }
export default Navbar;