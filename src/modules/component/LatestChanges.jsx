import React from 'react'

const LatestChanges = () => {
  return (
		<div className="bg-[#AEDFF4] p-6 w-2/5 rounded-md h-80">
			<h5 className="text-xl font-semibold mb-4">Latest Updates</h5>
			<div className="space-y-4">
				<p className="text-sm">• New contribution guidelines added</p>
				<p className="text-sm">• Community spotlight: Featured contributors</p>
				<p className="text-sm">• Upcoming open source events</p>
				<p className="text-sm">• Recent project milestones</p>
			</div>
		</div>
  );
}

export default LatestChanges
