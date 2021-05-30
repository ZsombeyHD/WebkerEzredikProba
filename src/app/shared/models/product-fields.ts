export interface ProductFields {
    agreement : AgreementItemRef [],
    billingAccount : BillingAccountRef,
    description : string,
    href : string,
    id : string,
    isBundle : boolean,
    isCustomerVisible : boolean,
    name : string,
    orderDate : string,
    place : RelatedPlaceRefOrValue [],
    product : ProductRefOrValue [],
    productCharacteristic : Characteristic []
    productOffering : ProductOfferingRef,
    productOrderItem : RelatedProductOrderItem [],
    productPrice : ProductPrice [],
    productRelationship : ProductRelationship [],
    productSerialNumber : string,
    productSpecification : ProductSpecificationRef,
    productTerm : ProductTerm [],
    realizingResource : ResourceRef [],
    realizingService : ServiceRef [],
    relatedParty : RelatedParty [],
    startDate : string,
    status : "created" | "pending active" | "active" | "aborted" | "cancelled" | "terminated" | "pending terminate" | "suspended",
    terminationDate : string
}
export interface AgreementItemRef {
    referredType : string,
    href : string,
    id : string,
    name : string,
    agreementItemId : string
}
export interface BillingAccountRef {
    referredType : string,
    href : string,
    id : string,
    name : string
}
export interface RelatedPlaceRefOrValue {
    referredType : string,
    href : string,
    id : string,
    name : string,
    role : string
}
export interface ProductRefOrValue {
    referredType : string,
    href : string,
    id : string,
    name : string,
    description : string,
    isBundle : boolean,
    isCustomerVisible : boolean,
    orderDate : string,
    productSerialNumber : string,
    startDate : string,
    terminationDate : string,
    agreement :  AgreementItemRef [],
    billingAccount : BillingAccountRef,
    place : RelatedPlaceRefOrValue [],
    product : ProductRefOrValue [],
    productCharacteristic : Characteristic [],
    productOffering : ProductOfferingRef,
    productOrderItem : RelatedProductOrderItem [],
    productPrice : ProductPrice [], 
    productRelationship : ProductRelationship [],
    productSpecification : ProductSpecificationRef,
    productTerm : ProductTerm [],
    realizingResource : ResourceRef [],
    realizingService : ServiceRef [],
    relatedParty : RelatedParty [],
    status : "created" | "pending active" | "active" | "aborted" | "cancelled" | "terminated" | "pending terminate" | "suspended",  
}
export interface Characteristic {
    name : string,
    value : any,
    valueType : string
}
export interface ProductOfferingRef {
    referredType : string,
    href : string,
    id : string,
    name : string
}
export interface RelatedProductOrderItem {
    referredType : string,
    orderItemAction : string,
    orderItemId : string,
    productOrderHref : string,
    productOrderId : string,
    role : string
}
export interface ProductPrice {
    billingAccount : BillingAccountRef,
    description : string,
    name : string,
    price : Price,
    priceType : string,
    productOfferingPrice : ProductOfferingPriceRef,
    productPriceAlteration : PriceAlteration [],
    recurringChargePeriod : string,
    unitOfMeasure : string
}
export interface ProductRelationship {
    product : ProductRefOrValue,
    relationshipType : string
}
export interface ProductSpecificationRef {
    referredType : string,
    href : string,
    id : string,
    name : string,
    targetProductSchema : TargetProductSchema,
    version : string
}
export interface ProductTerm {
    description : string,
    duration : Quantity,
    name : string,
    validFor : string
}
export interface ResourceRef {
    referredType : string,
    href : string,
    id : string,
    name : string,
    value : string
}
export interface ServiceRef {
    referredType : string,
    href : string,
    id : string,
    name : string
}
export interface RelatedParty {
    referredType : string,
    href : string,
    id : string,
    name : string
    role : string
}
export interface Price {
    dutyFreeAmount : Money,
    percentage : number,
    taxIncludedAmount : Money,
    taxRate : number
}
export interface ProductOfferingPriceRef {
    referredType : string,
    href : string,
    id : string,
    name : string
}
export interface PriceAlteration {
    applicationDuration : number,
    description : string,
    name : string,
    price : Price,
    priceType : string,
    priority : number,
    productOfferingPrice : ProductOfferingPriceRef,
    recurringChargePeriod : string,
    unitOfMeasure : string
}
export interface TargetProductSchema {
    schemaLocation : string,
    type : string
}
export interface Quantity {
    amount : number,
    units : string
}
export interface Money {
    unit : string,
    value : number
}