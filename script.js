function updateFlexboxDirection() {
	let flexDirection = document.getElementById("flexDirection").value;
	document.getElementById("flexContainerDirection").style.flexDirection =
		flexDirection;
}

function updateFlexboxJustify() {
	let flexJustify = document.getElementById("flexJustify").value;
	let flexContainerJustify = document.getElementById("flexContainerJustify");
	if (flexJustify.trim() !== "") {
		flexContainerJustify.style.justifyContent = flexJustify;
	}
}

function updateAlignItems() {
	let alignItems = document.getElementById("alignItems").value;
	let flexContainerAlign = document.getElementById("flexContainerAlign");
	if (alignItems.trim() !== "") {
		flexContainerAlign.style.alignItems = alignItems;
	}
}

function updateFlexDirection() {
	const direction = document.getElementById("flexDirectionComp").value;
	if (direction.trim() !== "") {
		document.getElementById("flexContainerComplete").style.flexDirection =
			direction;
	}
}

function updateJustifyContent() {
	const justify = document.getElementById("justifyContentComp").value;
	if (justify.trim() !== "") {
		document.getElementById("flexContainerComplete").style.justifyContent =
			justify;
	}
}

function updateAlignItemsComp() {
	const align = document.getElementById("alignItemsComp").value;
	if (align.trim() !== "") {
		document.getElementById("flexContainerComplete").style.alignItems = align;
	}
}

function updateGapFlex() {
	const gap = document.getElementById("gapFlexComp").value;
	if (gap.trim() !== "") {
		document.getElementById("flexContainerComplete").style.gap = gap;
	}
}

function updateGrid() {
	let columns = document.getElementById("columns").value;
	if (columns.trim() !== "") {
		document.getElementById("gridContainer").style.gridTemplateColumns =
			columns;
	}
}
function updateGridGap() {
	let gap = document.getElementById("gapColumns").value;
	if (gap.trim() !== "") {
		document.getElementById("gridContainer").style.gap = gap;
	}
}
function updateGridRows() {
	let rows = document.getElementById("rows").value;
	if (rows.trim() !== "") {
		document.getElementById("gridContainerRows").style.gridTemplateRows = rows;
	}
}
function updateGridRowsGap() {
	let gap = document.getElementById("gapRows").value;
	if (gap.trim() !== "") {
		document.getElementById("gridContainerRows").style.gap = gap;
	}
}
function updateGridCompleteColumns() {
	let columns = document.getElementById("columnsComplete").value;
	if (columns.trim() !== "") {
		document.getElementById("gridContainerComplete").style.gridTemplateColumns =
			columns;
	}
}

function updateGridCompleteRows() {
	let rows = document.getElementById("rowsComplete").value;
	if (rows.trim() !== "") {
		document.getElementById("gridContainerComplete").style.gridTemplateRows =
			rows;
	}
}

function updateGridCompleteGap() {
	let gap = document.getElementById("gapComplete").value;
	if (gap.trim() !== "") {
		document.getElementById("gridContainerComplete").style.gap = gap;
	}
}

function close_popup() {
	document.getElementById("popup_code_container").innerHTML = "";
	const overlay = document.getElementById("overlay_flex");
	if (overlay) overlay.style.display = "none";
}

function open_popup(popupType) {
	const container = document.getElementById("popup_code_container");
	container.innerHTML = "";

	const template = document.getElementById("popup_template");
	const clone = template.content.cloneNode(true);
	const codeList = clone.getElementById("code_list");

	const displayItem = document.createElement("li");
	displayItem.textContent = "display: flex;";
	codeList.appendChild(displayItem);

	if (popupType === "flexContainerJustify") {
		const justify = document.getElementById("flexJustify").value;
		const justifyItem = document.createElement("li");
		justifyItem.textContent = `justify-content: ${justify};`;
		codeList.appendChild(justifyItem);
	}

	if (popupType === "flexContainerDirection") {
		const direction = document.getElementById("flexDirection").value;
		const directionItem = document.createElement("li");
		directionItem.textContent = `flex-direction: ${direction};`;
		codeList.appendChild(directionItem);
	}

	if (popupType === "flexContainerAlign") {
		let alignItems = document.getElementById("alignItems").value;
		const alignItem = document.createElement("li");
		alignItem.textContent = `align-items: ${alignItems};`;
		codeList.appendChild(alignItem);
	}

	if (popupType === "flexContainerComplete") {
		const direction = document.getElementById("flexDirectionComp").value;
		const justify = document.getElementById("justifyContentComp").value;
		const align = document.getElementById("alignItemsComp").value;
		const gap = document.getElementById("gapFlexComp").value;

		const directionItem = document.createElement("li");
		const justifyItem = document.createElement("li");
		const alignItem = document.createElement("li");
		const gapItem = document.createElement("li");

		directionItem.textContent = `flex-direction: ${direction};`;
		justifyItem.textContent = `justify-content: ${justify};`;
		alignItem.textContent = `align-items: ${align};`;
		gapItem.textContent = `gap: ${gap || "10px"};`;

		codeList.appendChild(directionItem);
		codeList.appendChild(alignItem);
		codeList.appendChild(justifyItem);
		codeList.appendChild(gapItem);
	}

	let overlay = document.getElementById("overlay_flex");
	if (!overlay) {
		overlay = document.createElement("div");
		overlay.id = "overlay_flex";
		overlay.className = "overlay";
		document.body.appendChild(overlay);
	}
	overlay.style.display = "block";

	container.appendChild(clone);

	const popupInner = document.getElementById("popup_code_inner");
	popupInner.style.display = "block";
	popupInner.style.opacity = "1";
}

function close_popup_grid() {
	document.getElementById("popup_code_container_grid").innerHTML = "";
	const overlay = document.getElementById("overlay_grid");
	if (overlay) overlay.style.display = "none";
}

function open_popup_grid(id) {
	const container = document.getElementById("popup_code_container_grid");
	const template = document.getElementById("popup_template_grid");
	const clone = template.content.cloneNode(true);

	const codeList = clone.querySelector("#code_list_grid");

	container.innerHTML = "";

	const displayItem = document.createElement("li");
	displayItem.textContent = "display: grid;";
	codeList.appendChild(displayItem);

	if (id === "gridContainer") {
		const columns = document.getElementById("columns").value;
		const gap = document.getElementById("gapColumns").value;

		const colItem = document.createElement("li");
		if (columns) {
			colItem.textContent = `grid-template-columns: ${columns};`;
		} else {
			colItem.textContent = `grid-template-columns: 1fr 1fr;`;
		}
		codeList.appendChild(colItem);

		const gapItem = document.createElement("li");
		if (gap) {
			gapItem.textContent = `gap: ${gap};`;
		} else {
			gapItem.textContent = `gap: 10px;`;
		}
		codeList.appendChild(gapItem);
	}

	if (id === "gridContainerRows") {
		const rows = document.getElementById("rows").value;
		const gap = document.getElementById("gapColumns").value;

		const rowItem = document.createElement("li");
		if (rows) {
			rowItem.textContent = `grid-template-rows: ${rows};`;
		} else {
			rowItem.textContent = `grid-template-rows: 1fr 1fr;`;
		}
		codeList.appendChild(rowItem);

		const gapItem = document.createElement("li");
		if (gap) {
			gapItem.textContent = `gap: ${gap};`;
		} else {
			gapItem.textContent = `gap: 10px;`;
		}
		codeList.appendChild(gapItem);
	}

	if (id === "gridContainerComplete") {
		const rows = document.getElementById("rows").value;
		const gap = document.getElementById("gapColumns").value;
		const columns = document.getElementById("columns").value;

		const rowItem = document.createElement("li");
		if (rows) {
			rowItem.textContent = `grid-template-rows: ${rows};`;
		} else {
			rowItem.textContent = `grid-template-rows: 1fr 1fr 1fr;`;
		}
		codeList.appendChild(rowItem);

		const colItem = document.createElement("li");
		if (columns) {
			colItem.textContent = `grid-template-columns: ${columns};`;
		} else {
			colItem.textContent = `grid-template-columns: 1fr 1fr;`;
		}
		codeList.appendChild(colItem);

		const gapItem = document.createElement("li");
		if (gap) {
			gapItem.textContent = `gap: ${gap};`;
		} else {
			gapItem.textContent = `gap: 10px;`;
		}
		codeList.appendChild(gapItem);
	}

	let overlay = document.getElementById("overlay_grid");
	if (!overlay) {
		overlay = document.createElement("div");
		overlay.id = "overlay_grid";
		overlay.className = "overlay";
		document.body.appendChild(overlay);
	}
	overlay.style.display = "block";

	container.appendChild(clone);

	const popupInner = container.querySelector("#popup_code_inner_grid");
	popupInner.style.display = "block";
	popupInner.style.opacity = "1";
}
