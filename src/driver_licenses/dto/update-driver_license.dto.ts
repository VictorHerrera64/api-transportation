import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverLicenseDto } from './create-driver_license.dto';

export class UpdateDriverLicenseDto extends PartialType(CreateDriverLicenseDto) {}
