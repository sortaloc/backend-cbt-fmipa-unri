module.exports = {
        typeDefs: /* GraphQL */ `type Admin {
  id: ID!
  nama: String!
  user: User!
}

type AdminConnection {
  pageInfo: PageInfo!
  edges: [AdminEdge]!
  aggregate: AggregateAdmin!
}

input AdminCreateInput {
  nama: String!
  user: UserCreateOneWithoutAdminInput!
}

input AdminCreateOneWithoutUserInput {
  create: AdminCreateWithoutUserInput
  connect: AdminWhereUniqueInput
}

input AdminCreateWithoutUserInput {
  nama: String!
}

type AdminEdge {
  node: Admin!
  cursor: String!
}

enum AdminOrderByInput {
  id_ASC
  id_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdminPreviousValues {
  id: ID!
  nama: String!
}

type AdminSubscriptionPayload {
  mutation: MutationType!
  node: Admin
  updatedFields: [String!]
  previousValues: AdminPreviousValues
}

input AdminSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdminWhereInput
  AND: [AdminSubscriptionWhereInput!]
  OR: [AdminSubscriptionWhereInput!]
  NOT: [AdminSubscriptionWhereInput!]
}

input AdminUpdateInput {
  nama: String
  user: UserUpdateOneRequiredWithoutAdminInput
}

input AdminUpdateOneWithoutUserInput {
  create: AdminCreateWithoutUserInput
  update: AdminUpdateWithoutUserDataInput
  upsert: AdminUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: AdminWhereUniqueInput
}

input AdminUpdateWithoutUserDataInput {
  nama: String
}

input AdminUpsertWithoutUserInput {
  update: AdminUpdateWithoutUserDataInput!
  create: AdminCreateWithoutUserInput!
}

input AdminWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  user: UserWhereInput
  AND: [AdminWhereInput!]
  OR: [AdminWhereInput!]
  NOT: [AdminWhereInput!]
}

input AdminWhereUniqueInput {
  id: ID
}

type AggregateAdmin {
  count: Int!
}

type AggregateDosen {
  count: Int!
}

type AggregateJawaban {
  count: Int!
}

type AggregateJawabanMahasiswa {
  count: Int!
}

type AggregateKelas {
  count: Int!
}

type AggregateMahasiswa {
  count: Int!
}

type AggregateMataKuliah {
  count: Int!
}

type AggregatePengawas {
  count: Int!
}

type AggregatePertanyaan {
  count: Int!
}

type AggregatePilihanGanda {
  count: Int!
}

type AggregateSoalMahasiswa {
  count: Int!
}

type AggregateUjian {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Dosen {
  id: ID!
  nip: String!
  nama: String!
  user: User!
}

type DosenConnection {
  pageInfo: PageInfo!
  edges: [DosenEdge]!
  aggregate: AggregateDosen!
}

input DosenCreateInput {
  nip: String!
  nama: String!
  user: UserCreateOneWithoutDosenInput!
}

input DosenCreateOneWithoutUserInput {
  create: DosenCreateWithoutUserInput
  connect: DosenWhereUniqueInput
}

input DosenCreateWithoutUserInput {
  nip: String!
  nama: String!
}

type DosenEdge {
  node: Dosen!
  cursor: String!
}

enum DosenOrderByInput {
  id_ASC
  id_DESC
  nip_ASC
  nip_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DosenPreviousValues {
  id: ID!
  nip: String!
  nama: String!
}

type DosenSubscriptionPayload {
  mutation: MutationType!
  node: Dosen
  updatedFields: [String!]
  previousValues: DosenPreviousValues
}

input DosenSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DosenWhereInput
  AND: [DosenSubscriptionWhereInput!]
  OR: [DosenSubscriptionWhereInput!]
  NOT: [DosenSubscriptionWhereInput!]
}

input DosenUpdateInput {
  nip: String
  nama: String
  user: UserUpdateOneRequiredWithoutDosenInput
}

input DosenUpdateOneWithoutUserInput {
  create: DosenCreateWithoutUserInput
  update: DosenUpdateWithoutUserDataInput
  upsert: DosenUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: DosenWhereUniqueInput
}

input DosenUpdateWithoutUserDataInput {
  nip: String
  nama: String
}

input DosenUpsertWithoutUserInput {
  update: DosenUpdateWithoutUserDataInput!
  create: DosenCreateWithoutUserInput!
}

input DosenWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nip: String
  nip_not: String
  nip_in: [String!]
  nip_not_in: [String!]
  nip_lt: String
  nip_lte: String
  nip_gt: String
  nip_gte: String
  nip_contains: String
  nip_not_contains: String
  nip_starts_with: String
  nip_not_starts_with: String
  nip_ends_with: String
  nip_not_ends_with: String
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  user: UserWhereInput
  AND: [DosenWhereInput!]
  OR: [DosenWhereInput!]
  NOT: [DosenWhereInput!]
}

input DosenWhereUniqueInput {
  id: ID
  nip: String
}

type Jawaban {
  id: ID!
  isi: String!
  gambar: String
  pertanyaan: Pertanyaan!
  kebenaran: Boolean!
}

type JawabanConnection {
  pageInfo: PageInfo!
  edges: [JawabanEdge]!
  aggregate: AggregateJawaban!
}

input JawabanCreateInput {
  isi: String!
  gambar: String
  pertanyaan: PertanyaanCreateOneInput!
  kebenaran: Boolean
}

input JawabanCreateManyInput {
  create: [JawabanCreateInput!]
  connect: [JawabanWhereUniqueInput!]
}

input JawabanCreateOneInput {
  create: JawabanCreateInput
  connect: JawabanWhereUniqueInput
}

type JawabanEdge {
  node: Jawaban!
  cursor: String!
}

type JawabanMahasiswa {
  id: ID!
  JawabanSoal: Jawaban!
}

type JawabanMahasiswaConnection {
  pageInfo: PageInfo!
  edges: [JawabanMahasiswaEdge]!
  aggregate: AggregateJawabanMahasiswa!
}

input JawabanMahasiswaCreateInput {
  JawabanSoal: JawabanCreateOneInput!
}

input JawabanMahasiswaCreateManyInput {
  create: [JawabanMahasiswaCreateInput!]
  connect: [JawabanMahasiswaWhereUniqueInput!]
}

type JawabanMahasiswaEdge {
  node: JawabanMahasiswa!
  cursor: String!
}

enum JawabanMahasiswaOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type JawabanMahasiswaPreviousValues {
  id: ID!
}

type JawabanMahasiswaSubscriptionPayload {
  mutation: MutationType!
  node: JawabanMahasiswa
  updatedFields: [String!]
  previousValues: JawabanMahasiswaPreviousValues
}

input JawabanMahasiswaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JawabanMahasiswaWhereInput
  AND: [JawabanMahasiswaSubscriptionWhereInput!]
  OR: [JawabanMahasiswaSubscriptionWhereInput!]
  NOT: [JawabanMahasiswaSubscriptionWhereInput!]
}

input JawabanMahasiswaUpdateDataInput {
  JawabanSoal: JawabanUpdateOneRequiredInput
}

input JawabanMahasiswaUpdateInput {
  JawabanSoal: JawabanUpdateOneRequiredInput
}

input JawabanMahasiswaUpdateManyInput {
  create: [JawabanMahasiswaCreateInput!]
  delete: [JawabanMahasiswaWhereUniqueInput!]
  connect: [JawabanMahasiswaWhereUniqueInput!]
  disconnect: [JawabanMahasiswaWhereUniqueInput!]
  update: [JawabanMahasiswaUpdateWithWhereUniqueNestedInput!]
  upsert: [JawabanMahasiswaUpsertWithWhereUniqueNestedInput!]
}

input JawabanMahasiswaUpdateWithWhereUniqueNestedInput {
  where: JawabanMahasiswaWhereUniqueInput!
  data: JawabanMahasiswaUpdateDataInput!
}

input JawabanMahasiswaUpsertWithWhereUniqueNestedInput {
  where: JawabanMahasiswaWhereUniqueInput!
  update: JawabanMahasiswaUpdateDataInput!
  create: JawabanMahasiswaCreateInput!
}

input JawabanMahasiswaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  JawabanSoal: JawabanWhereInput
  AND: [JawabanMahasiswaWhereInput!]
  OR: [JawabanMahasiswaWhereInput!]
  NOT: [JawabanMahasiswaWhereInput!]
}

input JawabanMahasiswaWhereUniqueInput {
  id: ID
}

enum JawabanOrderByInput {
  id_ASC
  id_DESC
  isi_ASC
  isi_DESC
  gambar_ASC
  gambar_DESC
  kebenaran_ASC
  kebenaran_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type JawabanPreviousValues {
  id: ID!
  isi: String!
  gambar: String
  kebenaran: Boolean!
}

type JawabanSubscriptionPayload {
  mutation: MutationType!
  node: Jawaban
  updatedFields: [String!]
  previousValues: JawabanPreviousValues
}

input JawabanSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JawabanWhereInput
  AND: [JawabanSubscriptionWhereInput!]
  OR: [JawabanSubscriptionWhereInput!]
  NOT: [JawabanSubscriptionWhereInput!]
}

input JawabanUpdateDataInput {
  isi: String
  gambar: String
  pertanyaan: PertanyaanUpdateOneRequiredInput
  kebenaran: Boolean
}

input JawabanUpdateInput {
  isi: String
  gambar: String
  pertanyaan: PertanyaanUpdateOneRequiredInput
  kebenaran: Boolean
}

input JawabanUpdateManyInput {
  create: [JawabanCreateInput!]
  delete: [JawabanWhereUniqueInput!]
  connect: [JawabanWhereUniqueInput!]
  disconnect: [JawabanWhereUniqueInput!]
  update: [JawabanUpdateWithWhereUniqueNestedInput!]
  upsert: [JawabanUpsertWithWhereUniqueNestedInput!]
}

input JawabanUpdateOneRequiredInput {
  create: JawabanCreateInput
  update: JawabanUpdateDataInput
  upsert: JawabanUpsertNestedInput
  connect: JawabanWhereUniqueInput
}

input JawabanUpdateWithWhereUniqueNestedInput {
  where: JawabanWhereUniqueInput!
  data: JawabanUpdateDataInput!
}

input JawabanUpsertNestedInput {
  update: JawabanUpdateDataInput!
  create: JawabanCreateInput!
}

input JawabanUpsertWithWhereUniqueNestedInput {
  where: JawabanWhereUniqueInput!
  update: JawabanUpdateDataInput!
  create: JawabanCreateInput!
}

input JawabanWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  isi: String
  isi_not: String
  isi_in: [String!]
  isi_not_in: [String!]
  isi_lt: String
  isi_lte: String
  isi_gt: String
  isi_gte: String
  isi_contains: String
  isi_not_contains: String
  isi_starts_with: String
  isi_not_starts_with: String
  isi_ends_with: String
  isi_not_ends_with: String
  gambar: String
  gambar_not: String
  gambar_in: [String!]
  gambar_not_in: [String!]
  gambar_lt: String
  gambar_lte: String
  gambar_gt: String
  gambar_gte: String
  gambar_contains: String
  gambar_not_contains: String
  gambar_starts_with: String
  gambar_not_starts_with: String
  gambar_ends_with: String
  gambar_not_ends_with: String
  pertanyaan: PertanyaanWhereInput
  kebenaran: Boolean
  kebenaran_not: Boolean
  AND: [JawabanWhereInput!]
  OR: [JawabanWhereInput!]
  NOT: [JawabanWhereInput!]
}

input JawabanWhereUniqueInput {
  id: ID
}

type Kelas {
  id: ID!
  tahunAjaran: String!
  mataKuliah: MataKuliah!
  listMahasiswa(where: MahasiswaWhereInput, orderBy: MahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Mahasiswa!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type KelasConnection {
  pageInfo: PageInfo!
  edges: [KelasEdge]!
  aggregate: AggregateKelas!
}

input KelasCreateInput {
  tahunAjaran: String!
  mataKuliah: MataKuliahCreateOneInput!
  listMahasiswa: MahasiswaCreateManyInput
}

input KelasCreateOneInput {
  create: KelasCreateInput
  connect: KelasWhereUniqueInput
}

type KelasEdge {
  node: Kelas!
  cursor: String!
}

enum KelasOrderByInput {
  id_ASC
  id_DESC
  tahunAjaran_ASC
  tahunAjaran_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type KelasPreviousValues {
  id: ID!
  tahunAjaran: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type KelasSubscriptionPayload {
  mutation: MutationType!
  node: Kelas
  updatedFields: [String!]
  previousValues: KelasPreviousValues
}

input KelasSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: KelasWhereInput
  AND: [KelasSubscriptionWhereInput!]
  OR: [KelasSubscriptionWhereInput!]
  NOT: [KelasSubscriptionWhereInput!]
}

input KelasUpdateDataInput {
  tahunAjaran: String
  mataKuliah: MataKuliahUpdateOneRequiredInput
  listMahasiswa: MahasiswaUpdateManyInput
}

input KelasUpdateInput {
  tahunAjaran: String
  mataKuliah: MataKuliahUpdateOneRequiredInput
  listMahasiswa: MahasiswaUpdateManyInput
}

input KelasUpdateOneRequiredInput {
  create: KelasCreateInput
  update: KelasUpdateDataInput
  upsert: KelasUpsertNestedInput
  connect: KelasWhereUniqueInput
}

input KelasUpsertNestedInput {
  update: KelasUpdateDataInput!
  create: KelasCreateInput!
}

input KelasWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  tahunAjaran: String
  tahunAjaran_not: String
  tahunAjaran_in: [String!]
  tahunAjaran_not_in: [String!]
  tahunAjaran_lt: String
  tahunAjaran_lte: String
  tahunAjaran_gt: String
  tahunAjaran_gte: String
  tahunAjaran_contains: String
  tahunAjaran_not_contains: String
  tahunAjaran_starts_with: String
  tahunAjaran_not_starts_with: String
  tahunAjaran_ends_with: String
  tahunAjaran_not_ends_with: String
  mataKuliah: MataKuliahWhereInput
  listMahasiswa_every: MahasiswaWhereInput
  listMahasiswa_some: MahasiswaWhereInput
  listMahasiswa_none: MahasiswaWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [KelasWhereInput!]
  OR: [KelasWhereInput!]
  NOT: [KelasWhereInput!]
}

input KelasWhereUniqueInput {
  id: ID
}

scalar Long

type Mahasiswa {
  id: ID!
  nim: String!
  nama: String!
  user: User!
}

type MahasiswaConnection {
  pageInfo: PageInfo!
  edges: [MahasiswaEdge]!
  aggregate: AggregateMahasiswa!
}

input MahasiswaCreateInput {
  nim: String!
  nama: String!
  user: UserCreateOneWithoutMahasiswaInput!
}

input MahasiswaCreateManyInput {
  create: [MahasiswaCreateInput!]
  connect: [MahasiswaWhereUniqueInput!]
}

input MahasiswaCreateOneInput {
  create: MahasiswaCreateInput
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaCreateOneWithoutUserInput {
  create: MahasiswaCreateWithoutUserInput
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaCreateWithoutUserInput {
  nim: String!
  nama: String!
}

type MahasiswaEdge {
  node: Mahasiswa!
  cursor: String!
}

enum MahasiswaOrderByInput {
  id_ASC
  id_DESC
  nim_ASC
  nim_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MahasiswaPreviousValues {
  id: ID!
  nim: String!
  nama: String!
}

type MahasiswaSubscriptionPayload {
  mutation: MutationType!
  node: Mahasiswa
  updatedFields: [String!]
  previousValues: MahasiswaPreviousValues
}

input MahasiswaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MahasiswaWhereInput
  AND: [MahasiswaSubscriptionWhereInput!]
  OR: [MahasiswaSubscriptionWhereInput!]
  NOT: [MahasiswaSubscriptionWhereInput!]
}

input MahasiswaUpdateDataInput {
  nim: String
  nama: String
  user: UserUpdateOneRequiredWithoutMahasiswaInput
}

input MahasiswaUpdateInput {
  nim: String
  nama: String
  user: UserUpdateOneRequiredWithoutMahasiswaInput
}

input MahasiswaUpdateManyInput {
  create: [MahasiswaCreateInput!]
  delete: [MahasiswaWhereUniqueInput!]
  connect: [MahasiswaWhereUniqueInput!]
  disconnect: [MahasiswaWhereUniqueInput!]
  update: [MahasiswaUpdateWithWhereUniqueNestedInput!]
  upsert: [MahasiswaUpsertWithWhereUniqueNestedInput!]
}

input MahasiswaUpdateOneRequiredInput {
  create: MahasiswaCreateInput
  update: MahasiswaUpdateDataInput
  upsert: MahasiswaUpsertNestedInput
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaUpdateOneWithoutUserInput {
  create: MahasiswaCreateWithoutUserInput
  update: MahasiswaUpdateWithoutUserDataInput
  upsert: MahasiswaUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaUpdateWithoutUserDataInput {
  nim: String
  nama: String
}

input MahasiswaUpdateWithWhereUniqueNestedInput {
  where: MahasiswaWhereUniqueInput!
  data: MahasiswaUpdateDataInput!
}

input MahasiswaUpsertNestedInput {
  update: MahasiswaUpdateDataInput!
  create: MahasiswaCreateInput!
}

input MahasiswaUpsertWithoutUserInput {
  update: MahasiswaUpdateWithoutUserDataInput!
  create: MahasiswaCreateWithoutUserInput!
}

input MahasiswaUpsertWithWhereUniqueNestedInput {
  where: MahasiswaWhereUniqueInput!
  update: MahasiswaUpdateDataInput!
  create: MahasiswaCreateInput!
}

input MahasiswaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nim: String
  nim_not: String
  nim_in: [String!]
  nim_not_in: [String!]
  nim_lt: String
  nim_lte: String
  nim_gt: String
  nim_gte: String
  nim_contains: String
  nim_not_contains: String
  nim_starts_with: String
  nim_not_starts_with: String
  nim_ends_with: String
  nim_not_ends_with: String
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  user: UserWhereInput
  AND: [MahasiswaWhereInput!]
  OR: [MahasiswaWhereInput!]
  NOT: [MahasiswaWhereInput!]
}

input MahasiswaWhereUniqueInput {
  id: ID
  nim: String
}

type MataKuliah {
  id: ID!
  kode: String!
  nama: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MataKuliahConnection {
  pageInfo: PageInfo!
  edges: [MataKuliahEdge]!
  aggregate: AggregateMataKuliah!
}

input MataKuliahCreateInput {
  kode: String!
  nama: String!
}

input MataKuliahCreateOneInput {
  create: MataKuliahCreateInput
  connect: MataKuliahWhereUniqueInput
}

type MataKuliahEdge {
  node: MataKuliah!
  cursor: String!
}

enum MataKuliahOrderByInput {
  id_ASC
  id_DESC
  kode_ASC
  kode_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MataKuliahPreviousValues {
  id: ID!
  kode: String!
  nama: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MataKuliahSubscriptionPayload {
  mutation: MutationType!
  node: MataKuliah
  updatedFields: [String!]
  previousValues: MataKuliahPreviousValues
}

input MataKuliahSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MataKuliahWhereInput
  AND: [MataKuliahSubscriptionWhereInput!]
  OR: [MataKuliahSubscriptionWhereInput!]
  NOT: [MataKuliahSubscriptionWhereInput!]
}

input MataKuliahUpdateDataInput {
  kode: String
  nama: String
}

input MataKuliahUpdateInput {
  kode: String
  nama: String
}

input MataKuliahUpdateOneRequiredInput {
  create: MataKuliahCreateInput
  update: MataKuliahUpdateDataInput
  upsert: MataKuliahUpsertNestedInput
  connect: MataKuliahWhereUniqueInput
}

input MataKuliahUpsertNestedInput {
  update: MataKuliahUpdateDataInput!
  create: MataKuliahCreateInput!
}

input MataKuliahWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  kode: String
  kode_not: String
  kode_in: [String!]
  kode_not_in: [String!]
  kode_lt: String
  kode_lte: String
  kode_gt: String
  kode_gte: String
  kode_contains: String
  kode_not_contains: String
  kode_starts_with: String
  kode_not_starts_with: String
  kode_ends_with: String
  kode_not_ends_with: String
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MataKuliahWhereInput!]
  OR: [MataKuliahWhereInput!]
  NOT: [MataKuliahWhereInput!]
}

input MataKuliahWhereUniqueInput {
  id: ID
  kode: String
}

type Mutation {
  createAdmin(data: AdminCreateInput!): Admin!
  updateAdmin(data: AdminUpdateInput!, where: AdminWhereUniqueInput!): Admin
  updateManyAdmins(data: AdminUpdateInput!, where: AdminWhereInput): BatchPayload!
  upsertAdmin(where: AdminWhereUniqueInput!, create: AdminCreateInput!, update: AdminUpdateInput!): Admin!
  deleteAdmin(where: AdminWhereUniqueInput!): Admin
  deleteManyAdmins(where: AdminWhereInput): BatchPayload!
  createDosen(data: DosenCreateInput!): Dosen!
  updateDosen(data: DosenUpdateInput!, where: DosenWhereUniqueInput!): Dosen
  updateManyDosens(data: DosenUpdateInput!, where: DosenWhereInput): BatchPayload!
  upsertDosen(where: DosenWhereUniqueInput!, create: DosenCreateInput!, update: DosenUpdateInput!): Dosen!
  deleteDosen(where: DosenWhereUniqueInput!): Dosen
  deleteManyDosens(where: DosenWhereInput): BatchPayload!
  createJawaban(data: JawabanCreateInput!): Jawaban!
  updateJawaban(data: JawabanUpdateInput!, where: JawabanWhereUniqueInput!): Jawaban
  updateManyJawabans(data: JawabanUpdateInput!, where: JawabanWhereInput): BatchPayload!
  upsertJawaban(where: JawabanWhereUniqueInput!, create: JawabanCreateInput!, update: JawabanUpdateInput!): Jawaban!
  deleteJawaban(where: JawabanWhereUniqueInput!): Jawaban
  deleteManyJawabans(where: JawabanWhereInput): BatchPayload!
  createJawabanMahasiswa(data: JawabanMahasiswaCreateInput!): JawabanMahasiswa!
  updateJawabanMahasiswa(data: JawabanMahasiswaUpdateInput!, where: JawabanMahasiswaWhereUniqueInput!): JawabanMahasiswa
  updateManyJawabanMahasiswas(data: JawabanMahasiswaUpdateInput!, where: JawabanMahasiswaWhereInput): BatchPayload!
  upsertJawabanMahasiswa(where: JawabanMahasiswaWhereUniqueInput!, create: JawabanMahasiswaCreateInput!, update: JawabanMahasiswaUpdateInput!): JawabanMahasiswa!
  deleteJawabanMahasiswa(where: JawabanMahasiswaWhereUniqueInput!): JawabanMahasiswa
  deleteManyJawabanMahasiswas(where: JawabanMahasiswaWhereInput): BatchPayload!
  createKelas(data: KelasCreateInput!): Kelas!
  updateKelas(data: KelasUpdateInput!, where: KelasWhereUniqueInput!): Kelas
  updateManyKelases(data: KelasUpdateInput!, where: KelasWhereInput): BatchPayload!
  upsertKelas(where: KelasWhereUniqueInput!, create: KelasCreateInput!, update: KelasUpdateInput!): Kelas!
  deleteKelas(where: KelasWhereUniqueInput!): Kelas
  deleteManyKelases(where: KelasWhereInput): BatchPayload!
  createMahasiswa(data: MahasiswaCreateInput!): Mahasiswa!
  updateMahasiswa(data: MahasiswaUpdateInput!, where: MahasiswaWhereUniqueInput!): Mahasiswa
  updateManyMahasiswas(data: MahasiswaUpdateInput!, where: MahasiswaWhereInput): BatchPayload!
  upsertMahasiswa(where: MahasiswaWhereUniqueInput!, create: MahasiswaCreateInput!, update: MahasiswaUpdateInput!): Mahasiswa!
  deleteMahasiswa(where: MahasiswaWhereUniqueInput!): Mahasiswa
  deleteManyMahasiswas(where: MahasiswaWhereInput): BatchPayload!
  createMataKuliah(data: MataKuliahCreateInput!): MataKuliah!
  updateMataKuliah(data: MataKuliahUpdateInput!, where: MataKuliahWhereUniqueInput!): MataKuliah
  updateManyMataKuliahs(data: MataKuliahUpdateInput!, where: MataKuliahWhereInput): BatchPayload!
  upsertMataKuliah(where: MataKuliahWhereUniqueInput!, create: MataKuliahCreateInput!, update: MataKuliahUpdateInput!): MataKuliah!
  deleteMataKuliah(where: MataKuliahWhereUniqueInput!): MataKuliah
  deleteManyMataKuliahs(where: MataKuliahWhereInput): BatchPayload!
  createPengawas(data: PengawasCreateInput!): Pengawas!
  updatePengawas(data: PengawasUpdateInput!, where: PengawasWhereUniqueInput!): Pengawas
  updateManyPengawases(data: PengawasUpdateInput!, where: PengawasWhereInput): BatchPayload!
  upsertPengawas(where: PengawasWhereUniqueInput!, create: PengawasCreateInput!, update: PengawasUpdateInput!): Pengawas!
  deletePengawas(where: PengawasWhereUniqueInput!): Pengawas
  deleteManyPengawases(where: PengawasWhereInput): BatchPayload!
  createPertanyaan(data: PertanyaanCreateInput!): Pertanyaan!
  updatePertanyaan(data: PertanyaanUpdateInput!, where: PertanyaanWhereUniqueInput!): Pertanyaan
  updateManyPertanyaans(data: PertanyaanUpdateInput!, where: PertanyaanWhereInput): BatchPayload!
  upsertPertanyaan(where: PertanyaanWhereUniqueInput!, create: PertanyaanCreateInput!, update: PertanyaanUpdateInput!): Pertanyaan!
  deletePertanyaan(where: PertanyaanWhereUniqueInput!): Pertanyaan
  deleteManyPertanyaans(where: PertanyaanWhereInput): BatchPayload!
  createPilihanGanda(data: PilihanGandaCreateInput!): PilihanGanda!
  updatePilihanGanda(data: PilihanGandaUpdateInput!, where: PilihanGandaWhereUniqueInput!): PilihanGanda
  updateManyPilihanGandas(data: PilihanGandaUpdateInput!, where: PilihanGandaWhereInput): BatchPayload!
  upsertPilihanGanda(where: PilihanGandaWhereUniqueInput!, create: PilihanGandaCreateInput!, update: PilihanGandaUpdateInput!): PilihanGanda!
  deletePilihanGanda(where: PilihanGandaWhereUniqueInput!): PilihanGanda
  deleteManyPilihanGandas(where: PilihanGandaWhereInput): BatchPayload!
  createSoalMahasiswa(data: SoalMahasiswaCreateInput!): SoalMahasiswa!
  updateSoalMahasiswa(data: SoalMahasiswaUpdateInput!, where: SoalMahasiswaWhereUniqueInput!): SoalMahasiswa
  updateManySoalMahasiswas(data: SoalMahasiswaUpdateInput!, where: SoalMahasiswaWhereInput): BatchPayload!
  upsertSoalMahasiswa(where: SoalMahasiswaWhereUniqueInput!, create: SoalMahasiswaCreateInput!, update: SoalMahasiswaUpdateInput!): SoalMahasiswa!
  deleteSoalMahasiswa(where: SoalMahasiswaWhereUniqueInput!): SoalMahasiswa
  deleteManySoalMahasiswas(where: SoalMahasiswaWhereInput): BatchPayload!
  createUjian(data: UjianCreateInput!): Ujian!
  updateUjian(data: UjianUpdateInput!, where: UjianWhereUniqueInput!): Ujian
  updateManyUjians(data: UjianUpdateInput!, where: UjianWhereInput): BatchPayload!
  upsertUjian(where: UjianWhereUniqueInput!, create: UjianCreateInput!, update: UjianUpdateInput!): Ujian!
  deleteUjian(where: UjianWhereUniqueInput!): Ujian
  deleteManyUjians(where: UjianWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Pengawas {
  id: ID!
  nama: String!
  user: User!
}

type PengawasConnection {
  pageInfo: PageInfo!
  edges: [PengawasEdge]!
  aggregate: AggregatePengawas!
}

input PengawasCreateInput {
  nama: String!
  user: UserCreateOneWithoutPengawasInput!
}

input PengawasCreateOneInput {
  create: PengawasCreateInput
  connect: PengawasWhereUniqueInput
}

input PengawasCreateOneWithoutUserInput {
  create: PengawasCreateWithoutUserInput
  connect: PengawasWhereUniqueInput
}

input PengawasCreateWithoutUserInput {
  nama: String!
}

type PengawasEdge {
  node: Pengawas!
  cursor: String!
}

enum PengawasOrderByInput {
  id_ASC
  id_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PengawasPreviousValues {
  id: ID!
  nama: String!
}

type PengawasSubscriptionPayload {
  mutation: MutationType!
  node: Pengawas
  updatedFields: [String!]
  previousValues: PengawasPreviousValues
}

input PengawasSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PengawasWhereInput
  AND: [PengawasSubscriptionWhereInput!]
  OR: [PengawasSubscriptionWhereInput!]
  NOT: [PengawasSubscriptionWhereInput!]
}

input PengawasUpdateDataInput {
  nama: String
  user: UserUpdateOneRequiredWithoutPengawasInput
}

input PengawasUpdateInput {
  nama: String
  user: UserUpdateOneRequiredWithoutPengawasInput
}

input PengawasUpdateOneRequiredInput {
  create: PengawasCreateInput
  update: PengawasUpdateDataInput
  upsert: PengawasUpsertNestedInput
  connect: PengawasWhereUniqueInput
}

input PengawasUpdateOneWithoutUserInput {
  create: PengawasCreateWithoutUserInput
  update: PengawasUpdateWithoutUserDataInput
  upsert: PengawasUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: PengawasWhereUniqueInput
}

input PengawasUpdateWithoutUserDataInput {
  nama: String
}

input PengawasUpsertNestedInput {
  update: PengawasUpdateDataInput!
  create: PengawasCreateInput!
}

input PengawasUpsertWithoutUserInput {
  update: PengawasUpdateWithoutUserDataInput!
  create: PengawasCreateWithoutUserInput!
}

input PengawasWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  user: UserWhereInput
  AND: [PengawasWhereInput!]
  OR: [PengawasWhereInput!]
  NOT: [PengawasWhereInput!]
}

input PengawasWhereUniqueInput {
  id: ID
}

enum Permission {
  USER
  ADMIN
  DOSEN
  MAHASISWA
}

type Pertanyaan {
  id: ID!
  isi: String!
  gambar: [String!]!
}

type PertanyaanConnection {
  pageInfo: PageInfo!
  edges: [PertanyaanEdge]!
  aggregate: AggregatePertanyaan!
}

input PertanyaanCreategambarInput {
  set: [String!]
}

input PertanyaanCreateInput {
  isi: String!
  gambar: PertanyaanCreategambarInput
}

input PertanyaanCreateOneInput {
  create: PertanyaanCreateInput
  connect: PertanyaanWhereUniqueInput
}

type PertanyaanEdge {
  node: Pertanyaan!
  cursor: String!
}

enum PertanyaanOrderByInput {
  id_ASC
  id_DESC
  isi_ASC
  isi_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PertanyaanPreviousValues {
  id: ID!
  isi: String!
  gambar: [String!]!
}

type PertanyaanSubscriptionPayload {
  mutation: MutationType!
  node: Pertanyaan
  updatedFields: [String!]
  previousValues: PertanyaanPreviousValues
}

input PertanyaanSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PertanyaanWhereInput
  AND: [PertanyaanSubscriptionWhereInput!]
  OR: [PertanyaanSubscriptionWhereInput!]
  NOT: [PertanyaanSubscriptionWhereInput!]
}

input PertanyaanUpdateDataInput {
  isi: String
  gambar: PertanyaanUpdategambarInput
}

input PertanyaanUpdategambarInput {
  set: [String!]
}

input PertanyaanUpdateInput {
  isi: String
  gambar: PertanyaanUpdategambarInput
}

input PertanyaanUpdateOneRequiredInput {
  create: PertanyaanCreateInput
  update: PertanyaanUpdateDataInput
  upsert: PertanyaanUpsertNestedInput
  connect: PertanyaanWhereUniqueInput
}

input PertanyaanUpsertNestedInput {
  update: PertanyaanUpdateDataInput!
  create: PertanyaanCreateInput!
}

input PertanyaanWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  isi: String
  isi_not: String
  isi_in: [String!]
  isi_not_in: [String!]
  isi_lt: String
  isi_lte: String
  isi_gt: String
  isi_gte: String
  isi_contains: String
  isi_not_contains: String
  isi_starts_with: String
  isi_not_starts_with: String
  isi_ends_with: String
  isi_not_ends_with: String
  AND: [PertanyaanWhereInput!]
  OR: [PertanyaanWhereInput!]
  NOT: [PertanyaanWhereInput!]
}

input PertanyaanWhereUniqueInput {
  id: ID
}

type PilihanGanda {
  id: ID!
  pertanyaan: Pertanyaan!
  jawaban(where: JawabanWhereInput, orderBy: JawabanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Jawaban!]
}

type PilihanGandaConnection {
  pageInfo: PageInfo!
  edges: [PilihanGandaEdge]!
  aggregate: AggregatePilihanGanda!
}

input PilihanGandaCreateInput {
  pertanyaan: PertanyaanCreateOneInput!
  jawaban: JawabanCreateManyInput
}

input PilihanGandaCreateManyInput {
  create: [PilihanGandaCreateInput!]
  connect: [PilihanGandaWhereUniqueInput!]
}

type PilihanGandaEdge {
  node: PilihanGanda!
  cursor: String!
}

enum PilihanGandaOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PilihanGandaPreviousValues {
  id: ID!
}

type PilihanGandaSubscriptionPayload {
  mutation: MutationType!
  node: PilihanGanda
  updatedFields: [String!]
  previousValues: PilihanGandaPreviousValues
}

input PilihanGandaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PilihanGandaWhereInput
  AND: [PilihanGandaSubscriptionWhereInput!]
  OR: [PilihanGandaSubscriptionWhereInput!]
  NOT: [PilihanGandaSubscriptionWhereInput!]
}

input PilihanGandaUpdateDataInput {
  pertanyaan: PertanyaanUpdateOneRequiredInput
  jawaban: JawabanUpdateManyInput
}

input PilihanGandaUpdateInput {
  pertanyaan: PertanyaanUpdateOneRequiredInput
  jawaban: JawabanUpdateManyInput
}

input PilihanGandaUpdateManyInput {
  create: [PilihanGandaCreateInput!]
  delete: [PilihanGandaWhereUniqueInput!]
  connect: [PilihanGandaWhereUniqueInput!]
  disconnect: [PilihanGandaWhereUniqueInput!]
  update: [PilihanGandaUpdateWithWhereUniqueNestedInput!]
  upsert: [PilihanGandaUpsertWithWhereUniqueNestedInput!]
}

input PilihanGandaUpdateWithWhereUniqueNestedInput {
  where: PilihanGandaWhereUniqueInput!
  data: PilihanGandaUpdateDataInput!
}

input PilihanGandaUpsertWithWhereUniqueNestedInput {
  where: PilihanGandaWhereUniqueInput!
  update: PilihanGandaUpdateDataInput!
  create: PilihanGandaCreateInput!
}

input PilihanGandaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  pertanyaan: PertanyaanWhereInput
  jawaban_every: JawabanWhereInput
  jawaban_some: JawabanWhereInput
  jawaban_none: JawabanWhereInput
  AND: [PilihanGandaWhereInput!]
  OR: [PilihanGandaWhereInput!]
  NOT: [PilihanGandaWhereInput!]
}

input PilihanGandaWhereUniqueInput {
  id: ID
}

type Query {
  admin(where: AdminWhereUniqueInput!): Admin
  admins(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Admin]!
  adminsConnection(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdminConnection!
  dosen(where: DosenWhereUniqueInput!): Dosen
  dosens(where: DosenWhereInput, orderBy: DosenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dosen]!
  dosensConnection(where: DosenWhereInput, orderBy: DosenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DosenConnection!
  jawaban(where: JawabanWhereUniqueInput!): Jawaban
  jawabans(where: JawabanWhereInput, orderBy: JawabanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Jawaban]!
  jawabansConnection(where: JawabanWhereInput, orderBy: JawabanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JawabanConnection!
  jawabanMahasiswa(where: JawabanMahasiswaWhereUniqueInput!): JawabanMahasiswa
  jawabanMahasiswas(where: JawabanMahasiswaWhereInput, orderBy: JawabanMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JawabanMahasiswa]!
  jawabanMahasiswasConnection(where: JawabanMahasiswaWhereInput, orderBy: JawabanMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JawabanMahasiswaConnection!
  kelas(where: KelasWhereUniqueInput!): Kelas
  kelases(where: KelasWhereInput, orderBy: KelasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Kelas]!
  kelasesConnection(where: KelasWhereInput, orderBy: KelasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): KelasConnection!
  mahasiswa(where: MahasiswaWhereUniqueInput!): Mahasiswa
  mahasiswas(where: MahasiswaWhereInput, orderBy: MahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Mahasiswa]!
  mahasiswasConnection(where: MahasiswaWhereInput, orderBy: MahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MahasiswaConnection!
  mataKuliah(where: MataKuliahWhereUniqueInput!): MataKuliah
  mataKuliahs(where: MataKuliahWhereInput, orderBy: MataKuliahOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MataKuliah]!
  mataKuliahsConnection(where: MataKuliahWhereInput, orderBy: MataKuliahOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MataKuliahConnection!
  pengawas(where: PengawasWhereUniqueInput!): Pengawas
  pengawases(where: PengawasWhereInput, orderBy: PengawasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pengawas]!
  pengawasesConnection(where: PengawasWhereInput, orderBy: PengawasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PengawasConnection!
  pertanyaan(where: PertanyaanWhereUniqueInput!): Pertanyaan
  pertanyaans(where: PertanyaanWhereInput, orderBy: PertanyaanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pertanyaan]!
  pertanyaansConnection(where: PertanyaanWhereInput, orderBy: PertanyaanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PertanyaanConnection!
  pilihanGanda(where: PilihanGandaWhereUniqueInput!): PilihanGanda
  pilihanGandas(where: PilihanGandaWhereInput, orderBy: PilihanGandaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PilihanGanda]!
  pilihanGandasConnection(where: PilihanGandaWhereInput, orderBy: PilihanGandaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PilihanGandaConnection!
  soalMahasiswa(where: SoalMahasiswaWhereUniqueInput!): SoalMahasiswa
  soalMahasiswas(where: SoalMahasiswaWhereInput, orderBy: SoalMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SoalMahasiswa]!
  soalMahasiswasConnection(where: SoalMahasiswaWhereInput, orderBy: SoalMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SoalMahasiswaConnection!
  ujian(where: UjianWhereUniqueInput!): Ujian
  ujians(where: UjianWhereInput, orderBy: UjianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ujian]!
  ujiansConnection(where: UjianWhereInput, orderBy: UjianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UjianConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type SoalMahasiswa {
  id: ID!
  mahasiswa: Mahasiswa!
  listSoal(where: PilihanGandaWhereInput, orderBy: PilihanGandaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PilihanGanda!]
  listJawaban(where: JawabanMahasiswaWhereInput, orderBy: JawabanMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JawabanMahasiswa!]
}

type SoalMahasiswaConnection {
  pageInfo: PageInfo!
  edges: [SoalMahasiswaEdge]!
  aggregate: AggregateSoalMahasiswa!
}

input SoalMahasiswaCreateInput {
  mahasiswa: MahasiswaCreateOneInput!
  listSoal: PilihanGandaCreateManyInput
  listJawaban: JawabanMahasiswaCreateManyInput
}

input SoalMahasiswaCreateManyInput {
  create: [SoalMahasiswaCreateInput!]
  connect: [SoalMahasiswaWhereUniqueInput!]
}

type SoalMahasiswaEdge {
  node: SoalMahasiswa!
  cursor: String!
}

enum SoalMahasiswaOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SoalMahasiswaPreviousValues {
  id: ID!
}

type SoalMahasiswaSubscriptionPayload {
  mutation: MutationType!
  node: SoalMahasiswa
  updatedFields: [String!]
  previousValues: SoalMahasiswaPreviousValues
}

input SoalMahasiswaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SoalMahasiswaWhereInput
  AND: [SoalMahasiswaSubscriptionWhereInput!]
  OR: [SoalMahasiswaSubscriptionWhereInput!]
  NOT: [SoalMahasiswaSubscriptionWhereInput!]
}

input SoalMahasiswaUpdateDataInput {
  mahasiswa: MahasiswaUpdateOneRequiredInput
  listSoal: PilihanGandaUpdateManyInput
  listJawaban: JawabanMahasiswaUpdateManyInput
}

input SoalMahasiswaUpdateInput {
  mahasiswa: MahasiswaUpdateOneRequiredInput
  listSoal: PilihanGandaUpdateManyInput
  listJawaban: JawabanMahasiswaUpdateManyInput
}

input SoalMahasiswaUpdateManyInput {
  create: [SoalMahasiswaCreateInput!]
  delete: [SoalMahasiswaWhereUniqueInput!]
  connect: [SoalMahasiswaWhereUniqueInput!]
  disconnect: [SoalMahasiswaWhereUniqueInput!]
  update: [SoalMahasiswaUpdateWithWhereUniqueNestedInput!]
  upsert: [SoalMahasiswaUpsertWithWhereUniqueNestedInput!]
}

input SoalMahasiswaUpdateWithWhereUniqueNestedInput {
  where: SoalMahasiswaWhereUniqueInput!
  data: SoalMahasiswaUpdateDataInput!
}

input SoalMahasiswaUpsertWithWhereUniqueNestedInput {
  where: SoalMahasiswaWhereUniqueInput!
  update: SoalMahasiswaUpdateDataInput!
  create: SoalMahasiswaCreateInput!
}

input SoalMahasiswaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  mahasiswa: MahasiswaWhereInput
  listSoal_every: PilihanGandaWhereInput
  listSoal_some: PilihanGandaWhereInput
  listSoal_none: PilihanGandaWhereInput
  listJawaban_every: JawabanMahasiswaWhereInput
  listJawaban_some: JawabanMahasiswaWhereInput
  listJawaban_none: JawabanMahasiswaWhereInput
  AND: [SoalMahasiswaWhereInput!]
  OR: [SoalMahasiswaWhereInput!]
  NOT: [SoalMahasiswaWhereInput!]
}

input SoalMahasiswaWhereUniqueInput {
  id: ID
}

type Subscription {
  admin(where: AdminSubscriptionWhereInput): AdminSubscriptionPayload
  dosen(where: DosenSubscriptionWhereInput): DosenSubscriptionPayload
  jawaban(where: JawabanSubscriptionWhereInput): JawabanSubscriptionPayload
  jawabanMahasiswa(where: JawabanMahasiswaSubscriptionWhereInput): JawabanMahasiswaSubscriptionPayload
  kelas(where: KelasSubscriptionWhereInput): KelasSubscriptionPayload
  mahasiswa(where: MahasiswaSubscriptionWhereInput): MahasiswaSubscriptionPayload
  mataKuliah(where: MataKuliahSubscriptionWhereInput): MataKuliahSubscriptionPayload
  pengawas(where: PengawasSubscriptionWhereInput): PengawasSubscriptionPayload
  pertanyaan(where: PertanyaanSubscriptionWhereInput): PertanyaanSubscriptionPayload
  pilihanGanda(where: PilihanGandaSubscriptionWhereInput): PilihanGandaSubscriptionPayload
  soalMahasiswa(where: SoalMahasiswaSubscriptionWhereInput): SoalMahasiswaSubscriptionPayload
  ujian(where: UjianSubscriptionWhereInput): UjianSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Ujian {
  id: ID!
  Kelas: Kelas!
  pengawas: Pengawas!
  listSoal(where: SoalMahasiswaWhereInput, orderBy: SoalMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SoalMahasiswa!]
  tanggalPelaksanaan: DateTime!
  tokenUjian: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UjianConnection {
  pageInfo: PageInfo!
  edges: [UjianEdge]!
  aggregate: AggregateUjian!
}

input UjianCreateInput {
  Kelas: KelasCreateOneInput!
  pengawas: PengawasCreateOneInput!
  listSoal: SoalMahasiswaCreateManyInput
  tanggalPelaksanaan: DateTime!
  tokenUjian: String!
}

type UjianEdge {
  node: Ujian!
  cursor: String!
}

enum UjianOrderByInput {
  id_ASC
  id_DESC
  tanggalPelaksanaan_ASC
  tanggalPelaksanaan_DESC
  tokenUjian_ASC
  tokenUjian_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UjianPreviousValues {
  id: ID!
  tanggalPelaksanaan: DateTime!
  tokenUjian: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UjianSubscriptionPayload {
  mutation: MutationType!
  node: Ujian
  updatedFields: [String!]
  previousValues: UjianPreviousValues
}

input UjianSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UjianWhereInput
  AND: [UjianSubscriptionWhereInput!]
  OR: [UjianSubscriptionWhereInput!]
  NOT: [UjianSubscriptionWhereInput!]
}

input UjianUpdateInput {
  Kelas: KelasUpdateOneRequiredInput
  pengawas: PengawasUpdateOneRequiredInput
  listSoal: SoalMahasiswaUpdateManyInput
  tanggalPelaksanaan: DateTime
  tokenUjian: String
}

input UjianWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  Kelas: KelasWhereInput
  pengawas: PengawasWhereInput
  listSoal_every: SoalMahasiswaWhereInput
  listSoal_some: SoalMahasiswaWhereInput
  listSoal_none: SoalMahasiswaWhereInput
  tanggalPelaksanaan: DateTime
  tanggalPelaksanaan_not: DateTime
  tanggalPelaksanaan_in: [DateTime!]
  tanggalPelaksanaan_not_in: [DateTime!]
  tanggalPelaksanaan_lt: DateTime
  tanggalPelaksanaan_lte: DateTime
  tanggalPelaksanaan_gt: DateTime
  tanggalPelaksanaan_gte: DateTime
  tokenUjian: String
  tokenUjian_not: String
  tokenUjian_in: [String!]
  tokenUjian_not_in: [String!]
  tokenUjian_lt: String
  tokenUjian_lte: String
  tokenUjian_gt: String
  tokenUjian_gte: String
  tokenUjian_contains: String
  tokenUjian_not_contains: String
  tokenUjian_starts_with: String
  tokenUjian_not_starts_with: String
  tokenUjian_ends_with: String
  tokenUjian_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UjianWhereInput!]
  OR: [UjianWhereInput!]
  NOT: [UjianWhereInput!]
}

input UjianWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: [Permission!]!
  admin: Admin
  mahasiswa: Mahasiswa
  dosen: Dosen
  pengawas: Pengawas
  resetToken: String
  resetTokenExpiry: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: UserCreatepermissionsInput
  admin: AdminCreateOneWithoutUserInput
  mahasiswa: MahasiswaCreateOneWithoutUserInput
  dosen: DosenCreateOneWithoutUserInput
  pengawas: PengawasCreateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserCreateOneWithoutAdminInput {
  create: UserCreateWithoutAdminInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutDosenInput {
  create: UserCreateWithoutDosenInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMahasiswaInput {
  create: UserCreateWithoutMahasiswaInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPengawasInput {
  create: UserCreateWithoutPengawasInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutAdminInput {
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: UserCreatepermissionsInput
  mahasiswa: MahasiswaCreateOneWithoutUserInput
  dosen: DosenCreateOneWithoutUserInput
  pengawas: PengawasCreateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserCreateWithoutDosenInput {
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: UserCreatepermissionsInput
  admin: AdminCreateOneWithoutUserInput
  mahasiswa: MahasiswaCreateOneWithoutUserInput
  pengawas: PengawasCreateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserCreateWithoutMahasiswaInput {
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: UserCreatepermissionsInput
  admin: AdminCreateOneWithoutUserInput
  dosen: DosenCreateOneWithoutUserInput
  pengawas: PengawasCreateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserCreateWithoutPengawasInput {
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: UserCreatepermissionsInput
  admin: AdminCreateOneWithoutUserInput
  mahasiswa: MahasiswaCreateOneWithoutUserInput
  dosen: DosenCreateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  gambar_ASC
  gambar_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  passwordKasih_ASC
  passwordKasih_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: [Permission!]!
  resetToken: String
  resetTokenExpiry: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  gambar: String
  email: String
  password: String
  passwordKasih: String
  permissions: UserUpdatepermissionsInput
  admin: AdminUpdateOneWithoutUserInput
  mahasiswa: MahasiswaUpdateOneWithoutUserInput
  dosen: DosenUpdateOneWithoutUserInput
  pengawas: PengawasUpdateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserUpdateOneRequiredWithoutAdminInput {
  create: UserCreateWithoutAdminInput
  update: UserUpdateWithoutAdminDataInput
  upsert: UserUpsertWithoutAdminInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutDosenInput {
  create: UserCreateWithoutDosenInput
  update: UserUpdateWithoutDosenDataInput
  upsert: UserUpsertWithoutDosenInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutMahasiswaInput {
  create: UserCreateWithoutMahasiswaInput
  update: UserUpdateWithoutMahasiswaDataInput
  upsert: UserUpsertWithoutMahasiswaInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPengawasInput {
  create: UserCreateWithoutPengawasInput
  update: UserUpdateWithoutPengawasDataInput
  upsert: UserUpsertWithoutPengawasInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutAdminDataInput {
  gambar: String
  email: String
  password: String
  passwordKasih: String
  permissions: UserUpdatepermissionsInput
  mahasiswa: MahasiswaUpdateOneWithoutUserInput
  dosen: DosenUpdateOneWithoutUserInput
  pengawas: PengawasUpdateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserUpdateWithoutDosenDataInput {
  gambar: String
  email: String
  password: String
  passwordKasih: String
  permissions: UserUpdatepermissionsInput
  admin: AdminUpdateOneWithoutUserInput
  mahasiswa: MahasiswaUpdateOneWithoutUserInput
  pengawas: PengawasUpdateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserUpdateWithoutMahasiswaDataInput {
  gambar: String
  email: String
  password: String
  passwordKasih: String
  permissions: UserUpdatepermissionsInput
  admin: AdminUpdateOneWithoutUserInput
  dosen: DosenUpdateOneWithoutUserInput
  pengawas: PengawasUpdateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserUpdateWithoutPengawasDataInput {
  gambar: String
  email: String
  password: String
  passwordKasih: String
  permissions: UserUpdatepermissionsInput
  admin: AdminUpdateOneWithoutUserInput
  mahasiswa: MahasiswaUpdateOneWithoutUserInput
  dosen: DosenUpdateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserUpsertWithoutAdminInput {
  update: UserUpdateWithoutAdminDataInput!
  create: UserCreateWithoutAdminInput!
}

input UserUpsertWithoutDosenInput {
  update: UserUpdateWithoutDosenDataInput!
  create: UserCreateWithoutDosenInput!
}

input UserUpsertWithoutMahasiswaInput {
  update: UserUpdateWithoutMahasiswaDataInput!
  create: UserCreateWithoutMahasiswaInput!
}

input UserUpsertWithoutPengawasInput {
  update: UserUpdateWithoutPengawasDataInput!
  create: UserCreateWithoutPengawasInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  gambar: String
  gambar_not: String
  gambar_in: [String!]
  gambar_not_in: [String!]
  gambar_lt: String
  gambar_lte: String
  gambar_gt: String
  gambar_gte: String
  gambar_contains: String
  gambar_not_contains: String
  gambar_starts_with: String
  gambar_not_starts_with: String
  gambar_ends_with: String
  gambar_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  passwordKasih: String
  passwordKasih_not: String
  passwordKasih_in: [String!]
  passwordKasih_not_in: [String!]
  passwordKasih_lt: String
  passwordKasih_lte: String
  passwordKasih_gt: String
  passwordKasih_gte: String
  passwordKasih_contains: String
  passwordKasih_not_contains: String
  passwordKasih_starts_with: String
  passwordKasih_not_starts_with: String
  passwordKasih_ends_with: String
  passwordKasih_not_ends_with: String
  admin: AdminWhereInput
  mahasiswa: MahasiswaWhereInput
  dosen: DosenWhereInput
  pengawas: PengawasWhereInput
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: String
  resetTokenExpiry_not: String
  resetTokenExpiry_in: [String!]
  resetTokenExpiry_not_in: [String!]
  resetTokenExpiry_lt: String
  resetTokenExpiry_lte: String
  resetTokenExpiry_gt: String
  resetTokenExpiry_gte: String
  resetTokenExpiry_contains: String
  resetTokenExpiry_not_contains: String
  resetTokenExpiry_starts_with: String
  resetTokenExpiry_not_starts_with: String
  resetTokenExpiry_ends_with: String
  resetTokenExpiry_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    