from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.


class Appraisal(models.Model):
    PRODUCT_KNOWLEDGE_CHOICES = (
        (1, 'Poor'),
        (2, 'Fair'),
        (3, 'Good'),
        (4, 'Very Good'),
        (5, 'Excellent')
    )
    SYSTEM_KNOWLEDGE_CHOICES = (
        (1, 'Poor'),
        (2, 'Fair'),
        (3, 'Good'),
        (4, 'Very Good'),
        (5, 'Excellent')
    )
    SALES_PROMOTION_SKILLS_CHOICES = (
        (1, 'Poor'),
        (2, 'Fair'),
        (3, 'Good'),
        (4, 'Very Good'),
        (5, 'Excellent')
    )
    PRIVATE_LABEL_PROMOTION_SKILLS_CHOICES = (
        (1, 'Poor'),
        (2, 'Fair'),
        (3, 'Good'),
        (4, 'Very Good'),
        (5, 'Excellent')
    )
    CUSTOMER_INTERACTION_SKILLS_CHOICES = (
        (1, 'Poor'),
        (2, 'Fair'),
        (3, 'Good'),
        (4, 'Very Good'),
        (5, 'Excellent')
    )
    STATUS_CHOICES = (
        ('Submitted', 'Submitted'),
        ('Supervisor Reviewed', 'Supervisor Reviewed'),
        ('Manager Reviewed', 'Manager Reviewed')
    )

    product_knowledge = models.IntegerField(choices=PRODUCT_KNOWLEDGE_CHOICES)
    system_knowledge = models.IntegerField(choices=SYSTEM_KNOWLEDGE_CHOICES)
    sales_promotion_skills = models.IntegerField(choices=SALES_PROMOTION_SKILLS_CHOICES)
    private_label_promotion_skills = models.IntegerField(choices=PRIVATE_LABEL_PROMOTION_SKILLS_CHOICES)
    customer_interaction_skills = models.IntegerField(choices=CUSTOMER_INTERACTION_SKILLS_CHOICES)
    overall_rating = models.IntegerField(null=True, blank=True)
    comments = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Submitted')


class EmployeeManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("Email is required")

        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        user = self.create_user(email=email, password=password)
        user.is_admin = True
        user.save(using=self._db)
        return user


class Employee(AbstractBaseUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    is_admin = models.BooleanField(default=False)
    is_supervisor = models.BooleanField(default=False)
    is_manager = models.BooleanField(default=False)

    objects = EmployeeManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin

