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
