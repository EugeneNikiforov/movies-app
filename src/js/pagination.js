const ulTag = document.querySelector('.pagination__list');
let totalPages = 20;
let page = 1;

// createPagination(totalPages, page);

// window.addEventListener('resize');

// function createPagination(totalPages, page) {
//   let liTag = '';
//   let beforePages = page - 1;
//   let afterPages = page + 1;
//   let activeLi;
//   const viewportWidth = Math.max(
//     document.documentElement.clientWidth,
//     window.innerWidth || 0
//   );

//   if (page > 1) {
//     liTag += `<li class="pagination__arrow" onclick="createPagination(totalPages, ${
//       page - 1
//     })"> <svg class="icon-arrow" width="16" heigth="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M12.6667 8H3.33334" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M8.00001 12.6667L3.33334 8.00004L8.00001 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// </svg></li>`;
//   }

//   if (page > 2) {
//     liTag += `<li class="pagination__numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
//     if (page > 3 && viewportWidth > 767) {
//       liTag += `<li class="pagination__dots"><span>...</span></li>`;
//     }
//   }
//   if (page == totalPages) {
//     beforePages = beforePages - 2;
//   } else if (page == totalPages - 1) {
//     beforePages = beforePages - 1;
//   }

//   if (page == 1) {
//     afterPages = afterPages + 2;
//   } else if (page == 2) {
//     afterPages = afterPages + 1;
//   }

//   for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
//     if (pageLength > totalPages) {
//       continue;
//     }

//     if (pageLength == 0) {
//       pageLength = pageLength + 1;
//     }

//     if (page == pageLength) {
//       activeLi = 'pagination__active';
//     } else {
//       activeLi = '';
//     }
//     liTag += `<li class="pagination__numb ${activeLi}" onclick="createPagination(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
//   }

//   if (page < totalPages - 1) {
//     if (page < totalPages - 2 && viewportWidth > 767) {
//       liTag += `<li class="pagination__dots"><span>...</span></li>`;
//     }
//     liTag += `<li class="pagination__numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
//   }

//   if (page < totalPages) {
//     liTag += `<li class="pagination__arrow" onclick="createPagination(totalPages, ${
//       page + 1
//     })"><svg class="icon-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M8.00002 12.6667L12.6667 8.00004L8.00002 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// </svg></li>`;
//   }
//   ulTag.innerHTML = liTag;
//   return liTag;
// }
