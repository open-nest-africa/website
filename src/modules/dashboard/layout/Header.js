import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

const Header = ({githubAvatar}) => {
    const profileImage = "/images/user-image.svg";

  return (
		<header className="py-3 px-9 border-b border-[#E4E7EC] w-full flex items-center justify-between">
			<div className="flex items-center gap-x-2">
				<span className="text-[#475367]">
					<MagnifyingGlassIcon className="w-4 h-4" />
				</span>
				<input
					type="text"
					placeholder="Search here"
					className="w-full border-none outline-none"
				/>
			</div>
			<div className="flex items-center gap-x-3">
				<span>
					<img src="/images/notification-icon.svg" alt="" />
				</span>
				<span className="h-10 w-10">
					<img
						src={githubAvatar || profileImage}
						alt="User Avatar"
						onError={(e) => {
							e.target.onerror = null;
							e.target.src = profileImage;
						}}
						className="w-full h-full object-cover"
					/>
				</span>
			</div>
		</header>
  );
};

export default Header;
