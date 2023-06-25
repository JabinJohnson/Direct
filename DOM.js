const main=document.querySelector('main');

const template = `
	<section>
		<h1>My Jokes</h1>
		<ul>
			<li>Do you want to hear a construction joke? <b>Sorry, still working on it.</b></li>
			<li>When does a joke become a "dad" joke? <b>When it becomes apparent.</b></li>
			<li>What does a house wear? <b>Address!</b></li>		
		</ul>
        <p>That's all folks!</p>
        <h4><a href="https://parade.com/1041830/marynliles/clean-jokes/" target="_blank">Source for jokes.</a></h4>
	</section>
`;

main.innerHTML= template;