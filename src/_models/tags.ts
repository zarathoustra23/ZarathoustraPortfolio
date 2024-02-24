export class Tag{
    static readonly PHOTOSHOP = new Tag("Photoshop","blue");
    static readonly ILLUSTRATOR = new Tag("illustrator","orange");
    static readonly PREMIERE_PRO = new Tag("premiere pro","darkpurple");
    static readonly AFTER_EFFECT = new Tag("after effect","purple");
    static readonly HTML = new Tag("HTML","orange");
    static readonly CSS = new Tag("CSS","blue");
    static readonly PYTHON = new Tag("python","blue");
    static readonly JAVASCRIPT = new Tag("javaScript","#008000");
    private constructor(private readonly key:string,public readonly color:string){

    }
    toString(){
        return this.key;
    }
}