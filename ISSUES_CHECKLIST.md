# Issues Checklist

## Urgent Fix Applied

- [x] **Order creation for default users** - Applied via MCP - Added "Users can insert their own orders" policy
  - Verified: RLS enabled, INSERT policies in place for `public` and `authenticated` roles


## Desktop Issues - Completed

### /services
- [x] Duplicate icons in "Галузі застосування" - Fixed by using Factory, Wrench, Building instead of Package, Settings, Target
- [x] "Стілки" positioned above "Більше" text in "Додаткові послуги" - Fixed by wrapping text in span tag

### /user/user-settings
- [x] Too much whitespace in "Вимоги до пароля" section - Fixed grid layout and added flex flex-col to parent


## Desktop Issues - Remaining (Manual/Visual)

### /services/3d-printing/mjf
- [ ] Photo between "галузі застосування" та "чому обрати MJF" not level (NEEDS MANUAL - visual check)

### /services/3d-printing/fdm
- [ ] Photos stretched or poor quality (NEEDS MANUAL - replace images)

### /equipment/fdm
- [ ] Duplicate photos in "Stratasys Fortus 400mc" section (NEEDS MANUAL - check data)
- [ ] Size mismatch in "Stratasys Fortus 400mc" (YOU HANDLE IMAGES)
- [ ] Size mismatch in "Stratasys Fortus 4250mc" build area (YOU HANDLE IMAGES)

### /services/reverse-engineering
- [ ] Top and left photos size mismatch at page start (YOU HANDLE IMAGES)

### /services
- [ ] Fortus 400 photo size mismatch at page start (YOU HANDLE IMAGES)
- [ ] Strange icon animation in "Як ми працюємо" (Need more details)

### /services/3d-printing
- [ ] Fortus 400 photo size mismatch at page start (YOU HANDLE IMAGES)
- [ ] Fortus 250 photo size mismatch under "Матеріали та технології" (YOU HANDLE IMAGES)

### /auth/required
- [x] "Вхід необхідний" wording - Fixed: "Увійдіть, щоб продовжити"

### /auth/login
- [x] "ваша@пошта.com" placeholder wording - Fixed: "email@example.com"

### /auth/register
- [x] "ваша організація ТОВ" placeholder wording - Fixed: "Назва вашої компанії"
- [ ] Email confirmation template not updated (NEEDS MANUAL - content)

## Mobile Issues - Remaining (Visual/You Handle Images)

### Homepage (additive3d.vercel.app)
- [ ] Text not adapted in "Чому обирають additive"
- [ ] Text not adapted in "Часті питання"

### /services/3d-printing/fdm (mobile)
- [ ] Fortus photos size mismatch (YOU HANDLE IMAGES)
- [ ] "матеріали" values positioning in "технічні характеристики"

### /services/3d-printing/lfam (mobile)
- [ ] "матеріали" values positioning in "технічні характеристики"
- [ ] Photo at page start size mismatch (YOU HANDLE IMAGES)

### /services/3d-printing (mobile)
- [ ] Fortus 400 photo size mismatch at page start (YOU HANDLE IMAGES)
- [ ] Fortus 250 photo size mismatch under "Матеріали та технології" (YOU HANDLE IMAGES)
- [ ] Text not adapted in "гарантія якості"

### /services (mobile)
- [ ] Fortus 400 photo size mismatch at page start (YOU HANDLE IMAGES)
- [ ] Strange positioning of numbers and icons in "Як ми працюємо"
- [ ] Possible icon/header positioning issues in "Наші переваги"
- [x] Duplicate icons in "Галузі застосування" - Fixed (same as desktop)

### /services/dyeing (mobile)
- [ ] Text under photo in "підхід additive3d" section

### /services/3d-scanning (mobile)
- [ ] Icon/header positioning in "галузі застосування"
- [ ] Text not adapted in "процес роботи"

### /services/smoothing (mobile)
- [ ] Text and container not adapted at page start
- [ ] Poor icons in "переваги хімічного згладжування"
- [ ] Poor icons in "Контроль якості"
- [ ] Poor icons in "переваги технології"

### /services/3d-printing/calculator (mobile)
- [ ] Calculator page not adapted

### /services/3d-modeling (mobile)
- [ ] Text not adapted in "параметризація"

### /services/reverse-engineering (mobile)
- [ ] First two photos size mismatch at page start (YOU HANDLE IMAGES)
- [ ] Text not adapted in "Процес реверс-інжинірингу"

### /services/geometry-inspection (mobile)
- [ ] Text not adapted in "процес інспекції"
- [ ] Icon/header positioning in "переваги інспекції"
- [ ] "zeiss GOM inspect" section not adapted

### /equipment (mobile)
- [ ] "Детальніше" link positioned too far from text in "Наше обладнання"

### /equipment/mjf (mobile)
- [ ] Icon/header positioning in "переваги технології MJF"
- [ ] Text not adapted in "процес виробництва"

### /equipment/fdm (mobile)
- [ ] Duplicate photos in "Stratasys Fortus 400mc" (YOU HANDLE)
- [ ] Size mismatch in "Stratasys Fortus 400mc" (YOU HANDLE IMAGES)
- [ ] Size mismatch in "Stratasys Fortus 4250mc" (YOU HANDLE IMAGES)
- [ ] Icon/header positioning in "переваги технології FDM"
- [ ] Text not adapted in "процес виробництва"

### /equipment/lfam (mobile)
- [ ] Icon/header positioning in "переваги технології lfam"
- [ ] Text not adapted in "процес виробництва"

### /materials
- [x] Too much distance between tag and description - Reduced margins in MaterialCard
