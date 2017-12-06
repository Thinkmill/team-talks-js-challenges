const { JSDOM } = require("jsdom");
const { findSymmetricNode } = require('./findSymmetricNode');

describe('findSymmetricNode', () => {

	it('returns #node2', () => {
		const dom = new JSDOM(`
			<div>
				<div id="root1">
					<div>
						<div></div>
					</div>
					<div>
						<div id="node1"></div>
						<div></div>
					</div>
				</div>
				<div id="root2">
					<div>
						<div></div>
					</div>
					<div>
						<div id="node2"></div>
						<div></div>
					</div>
				</div>
			</div>
		`);

		const treeA = dom.window.document.getElementById('root1');
		const treeB = dom.window.document.getElementById('root2');

		const node1 = dom.window.document.getElementById('node1');
		const node2 = dom.window.document.getElementById('node2');

		expect(findSymmetricNode(treeA, treeB, node1))
			.toEqual(node2);
	});
})
