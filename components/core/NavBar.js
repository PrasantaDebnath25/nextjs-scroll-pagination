import { GithubIcon } from '../../assets/Icons';

const NavBar = () => {
	return (
		<React.Fragment>
			<div className='nav-bar'>
				<div className='nav-body'>
					<div className='container'>
						<p className='brand-name '>
							Articles <span className='accent-clr'>App</span>
						</p>
						<a
							href='https://github.com/PrasantaDebnath25/nextjs-scroll-pagination'
							target='_blank'
							rel='noopener noreferrer'
						>
							<GithubIcon />
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
