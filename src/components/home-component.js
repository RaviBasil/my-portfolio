import React, { Component } from 'react';

export default class Home extends Component {
    render(){
        return(
        <div>
            <section id="colorlib-hero" class="js-fullheight" data-section="home">
				<div class="flexslider js-fullheight">
					<ul class="slides">
				   	<li style={{'backgroundImage': 'url(images/img_bg_2.jpg)'}}>
				   		<div class="overlay"></div>
				   		<div class="container-fluid">
				   			<div class="row">
					   			<div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div class="slider-text-inner js-fullheight">
					   					<div class="desc">
						   					<h1>Hi! <br/>I'm Ravi</h1>
											<p><a class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1JKnmrdMys6on9moeGVp9HXqV5ZsAQdBz/view?usp=sharings" target="_blank">Download CV <i class="icon-download4"></i></a></p>
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
				   	</li>
				   	<li style={{'backgroundImage': 'url(images/img_bg_2.jpg)'}}>
				   		<div class="overlay"></div>
				   		<div class="container-fluid">
				   			<div class="row">
					   			<div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div class="slider-text-inner">
					   					<div class="desc">
						   					<h1>I am <br/>a Software Engineer</h1>
												<p><a class="btn btn-primary btn-learn">View Portfolio <i class="icon-briefcase1"></i></a></p>
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
				   	</li>
					   <li style={{'backgroundImage': 'url(images/img_bg_2.jpg)'}}>
				   		<div class="overlay"></div>
				   		<div class="container-fluid">
				   			<div class="row">
					   			<div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
					   				<div class="slider-text-inner">
					   					<div class="desc">
						   					<h1>I love <br/>building <br/>THINGS!!</h1>
												<p><a class="btn btn-primary btn-learn" href="https://github.com/ravibasil" target="_blank">View Projects <i class="icon-briefcase3"></i></a></p>
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
				   	</li>
				  	</ul>
			  	</div>
			</section>
        </div>
        )
    }
}