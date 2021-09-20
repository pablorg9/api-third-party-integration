export interface IGiphyDao {
    getImg(_imgName: string): Promise<any>;
}
