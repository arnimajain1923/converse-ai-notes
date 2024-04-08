export async function POST(req: Request){
    try{
        const body=await req.json();

        const parseResult =createNoteSchema.safeParse(body);
        if(!parseResult.success){
            console.error(parseResult.error);
            return Response.json({error:"Invalid input"},{status:400})

        }
        const{title,content}=parseResult.data;
        const{userId}=auth();
        if(!userId){
            return Response.json({error:"Unauthorized"},{stauts:401});
        }
        const note=await prisma.note.create({
            data: {
                title,
                content,
                userId,
            },
        });


    }catch(error){
        console.error(error);
        return Response.json({error: "Internal server errror"},{status:500})
    }
}