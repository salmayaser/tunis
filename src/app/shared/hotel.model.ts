export class Hotel {
  constructor(

    public nameAr: string,
    public nameEn: string,
    public discriptionAr: string,
    public discriptionEn: string,
    public mainImage: string,
    public isPetAllowed: boolean,
    public hasSeaView: boolean,
    public hasResturant: true,
    public addressAr: string,
    public addresseEn: string,
    public mapUrl: string,
    public policiesAr: string,
    public policiesEn: string,
    public rate: number,
    public noOfComments: number,
    public categoryId: number
  ) { }
}
