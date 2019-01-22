declare module 'github-api' {
	interface user {
		username: string;
		password: string;
	}
	// function GitHub(x: user) {}
	class GitHub {
		constructor(x: user);
		getUser() {}
	}

	export default GitHub;
}
