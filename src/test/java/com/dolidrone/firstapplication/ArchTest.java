package com.dolidrone.firstapplication;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.dolidrone.firstapplication");

        noClasses()
            .that()
            .resideInAnyPackage("com.dolidrone.firstapplication.service..")
            .or()
            .resideInAnyPackage("com.dolidrone.firstapplication.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.dolidrone.firstapplication.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
