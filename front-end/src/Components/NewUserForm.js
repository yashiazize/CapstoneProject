import { withRouter } from "react-router-dom";

const NewUserForm = () => {
	return (
		<section>
			<form>
				<h1>New User form here</h1>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default withRouter(NewUserForm);
