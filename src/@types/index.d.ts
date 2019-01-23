declare module 'github-api' {

	interface Auth {
		username: string;
		password: string;
	}

	interface CallBack {
		(err: Error, notifications: any): void
	}

	interface User {
		listNotification(callback: CallBack): void;
		listStarredRepos(callback: CallBack): void;
		listRepos(callback: CallBack): void;
		getProfile(callback: CallBack): void;
	}

	interface Search {
		forRepositories(parms: any = {}, callback: CallBack): void;
	}

	class GitHub {
		constructor(user: Auth);
		getUser(x: string): User;
		search(x: string = "javascript"): Search;
	}

	export default GitHub;
}

