

export default function Pagination({ items, pageSize, currentPage, onPageChange }:any) {
  const pagesCount = Math.ceil(items / pageSize); 

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
       <div>
            <ul className="flex gap-2 items-center justify-center my-5">
            {pages.map((page) => (
                <li
                key={page}
                >
                <a className={`cursor-pointer p-2 rounded-full text-base font-bold h-10 w-10 flex items-center justify-center transition-all duration-200 
                    ${page === currentPage ? "bg-gray-250 text-gray-650" : "text-primary hover:bg-gray-250 hover:text-gray-650"}`}  onClick={() => onPageChange(page)}>
                    {page}
                </a>
                </li>
            ))}
            </ul>
        </div>
    );
};

