export interface ListResponse<T> {
  data: T;
  message: string;
  pagination?: {
    limit: number;
    page: number;
    total: number;
  };
}

export interface User {
  // firstName: DataTypes.STRING,
  // lastName: DataTypes.STRING,
  // email: DataTypes.STRING,
  // password: DataTypes.STRING,
  // phoneNumber: DataTypes.STRING,
  // address: DataTypes.STRING,
  // gender: DataTypes.BOOLEAN,
  // roleId: DataTypes.STRING,
  // positionId: DataTypes.STRING,
  // image: DataTypes.STRING,
  id?: number;
  email: string;
  roleId: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
  gender?: boolean;
  positionId?: string;
  image?: string;
}

export interface Code {
  id: number;
  key: string;
  type: string;
  valueEn: string;
  valueVi: string;
}

export interface CodeList {
  genders: Code[];
}
