export interface ClientProps {
    name: string
    key: string;
    active: boolean
}

export class Client {

    private props: ClientProps;
    private _id: number;

    constructor(props: ClientProps, id?: number) {
        this._id = id;
        this.props = {
            ...props
        }
    }

    public get id(): number {
        return this._id
    }

    public set name(name: string) {
        this.props.name = name
    }

    public get name(): string {
        return this.props.name
    }

    public set key(key: string) {
        this.props.key = key
    }

    public get key(): string {
        return this.props.key
    }

    public set active(active: boolean) {
        this.props.active = active
    }

    public get active(): boolean {
        return this.props.active
    }

}

