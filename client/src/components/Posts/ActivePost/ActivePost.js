import React from 'react';
import classes from './ActivePost.module.css';
import ActivePostText from "./ActivePostText/ActivePostText";
var FontAwesome = require('react-fontawesome');



const ActivePost = (props) => {
  const imageStyles={
    backgroundImage: 'url("' + props.img + '")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  return(
    <div className={classes.activePostCard}>
    <div className={classes.titleStyles}><h4>{props.title}</h4></div>
    <div className={classes.articleTitleFooter}>
    <div className={classes.author}> by- {props.author}</div>
    <div className={classes.publishedDate}>Published On: {props.date}</div>
    </div>
    <div style={imageStyles}>
    </div>
    <div className={classes.imageFooter}>
    <div className={classes.imageFotterLeft}>
    <FontAwesome
        className={classes.socialMediaLink}
        name="thumbs-up"
        size="2x"
        // spin
        style={{ color: 'gray' }}
    /> <span className={classes.likes}>{props.likes}</span>
    <FontAwesome
        className={classes.socialMediaLink}
        name="thumbs-down"
        size="2x"
        // spin
        style={{ color: 'gray' }}
    />  <span className={classes.dislikes}>{props.dislikes}</span>
    </div>
    <div className={classes.imageFotterRight}>
    <a href="" className={classes.facebookLink}>
    <FontAwesome
        className={classes.facebookShareLink}
        name="facebook"
        size="1x"
        // spin
        style={{ color: 'white' }}
    /> 
    </a>
    <a href="" className={classes.twitterLink}>
    <FontAwesome
       
        name="twitter"
        size="1x"
        // spin
        style={{ color: 'white' }}
    /> 
    </a>
    <a href="" className={classes.linkedInLink}>
    <FontAwesome
       
        name="linkedin"
        size="1x"
        // spin
        style={{ color: 'white' }}
    /> 
    </a>
    </div>
    </div>
    <div className={classes.postText}>
    <ActivePostText/>
    </div>
    
    </div>
  )
}

export default ActivePost