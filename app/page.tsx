import { isOwner } from "@/lib/server";

const HomePage = async () => {
	if (isOwner("not", "equal")) {
		return <div>highly sensitive information</div>;
	} else {
		return <div className="text-white">hello world</div>;
	}
};

export default HomePage;
