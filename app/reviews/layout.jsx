// Example of Nested Layouts , practicing with nested layouts.


export default function ReviewsLayout({children}){
return (
    <div>
        {children}
        <div style={{color: 'red'}}>
        [Practicing Layout]
        </div>
    </div>
);
}

// This layout will be used for all the reviews pages and inserted into the root layout.