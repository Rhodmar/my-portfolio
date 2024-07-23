import React from 'react';
import './Skills.css';

const Skills = () => {
	return (
		<section id="skills">
			<div className="content">
				<h1>I understand and speak these languages.</h1>
				<div className="logo-container">
					<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
						<img src="/img/frame.png" alt="HTML" className='logo-1'/>
					</a>
					<a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
						<img src="/img/mysql_svgrepo.com.png" alt="MySQL" className='logo-2'/>
					</a>
					<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
						<img src="/img/python_svgrepo.com.png" alt="Python" className='logo-3'/>
					</a>
					<a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
						<img src="/img/django_svgrepo.com.png" alt="Django" className='logo-4'/>
					</a>
					<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
						<img src="/img/react_1_logo_svgrepo.com.png" alt="React" className='logo-5'/>
					</a>
					<a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
						<img src="/img/laravel_svgrepo.com.png" alt="Laravel" className='logo-6'/>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Skills;