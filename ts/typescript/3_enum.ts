
/*
Enum - это такая сущность, которая помогает лучше структурировать код, если в нем присутствуют какие-либо однотипные элементы.
 */

enum Membership {
    Simple,
    Standart,
    Premium,
}

const membership = Membership.Standart
console.log(membership)
const membershipReverse = Membership[2]
console.log(membershipReverse)

enum SocialMedia {
    Twitter = 'Twitter',
    FaceBook = 'FaceBook',
    Instagram = 'Instagram'
}

const social = SocialMedia.Instagram
console.log(social)
