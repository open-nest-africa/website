import React, { useState } from "react";
import {
	MagnifyingGlassIcon,
	UserIcon,
	UserCircleIcon,
} from "@heroicons/react/24/solid";

const Header = ({ githubAvatar }) => {
	const profileImage = "/images/user-image.svg";
	const [imageError, setImageError] = useState(false);

	return (
		<header className="py-3 px-9 border-b border-[#E4E7EC] w-full flex items-center justify-between">
			<div className="flex items-center gap-x-2">
				<span className="text-[#475367]">
					<MagnifyingGlassIcon className="w-4 h-4" />
				</span>
				<input
					type="text"
					placeholder="Search for projects, resources, or contributors..."
					className="w-full border-none outline-none"
				/>
			</div>
			<div className="flex items-center gap-x-3">
				<span>
					<img src="/images/notification-icon.svg" alt="Notification bell" />
				</span>
				<span className="h-10 w-10 rounded-full">
					{imageError || !githubAvatar ? (
						<div className="relative w-11 h-11">
							<UserCircleIcon className="w-full h-full text-gray-500" />
							<span className="absolute bottom-[2px] right-[2px] w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
						</div>
					) : (
						<div className="relative w-11 h-11">
							<img
								src={githubAvatar}
								alt="User Avatar"
								onError={() => setImageError(true)}
								className="w-full h-full object-cover rounded-full"
							/>
							<span className="absolute bottom-[2px] right-[2px] w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
						</div>
					)}
				</span>
			</div>
		</header>
	);
};

export default Header;
