export default function(context){
    console.log(`MW called for Blogs Detail Page   ${ context.req ? context.req.url : ""}`);
}